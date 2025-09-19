"use client";

import React, { useState, useEffect, useRef } from "react";

interface MessageType {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
  isTyping: boolean;
}

// Matrix Rain Component (integrado)
const MatrixRain: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ 
  className = "", 
  style 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const matrixChars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 12;
    const drops: number[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const initDrops = () => {
      const cols = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let x = 0; x < cols; x++) {
        drops[x] = Math.random() * -50;
      }
    };

    resizeCanvas();
    initDrops();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.7 + 0.3})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      resizeCanvas();
      initDrops();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ zIndex: 0.8, ...style }} 
    />
  );
};

// Typing effect component
const TypewriterText: React.FC<{ 
  text: string; 
  speed?: number; 
  onComplete?: () => void 
}> = ({ text, speed = 50, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text && !isComplete) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
          onComplete && onComplete();
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [text, speed, onComplete, isComplete]);

  return <span>{displayText}</span>;
};

const MatrixChatbot: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isVisible && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "SISTEMA INICIADO...\n> Conexión establecida\n> Bienvenido al Terminal\n¿En qué puedo asistirte?",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString(),
            isTyping: true
          }
        ]);
      }, 500);
    }
  }, [isVisible, messages.length]);

  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "PROCESANDO CONSULTA...\n> Análisis completo\n> " + (userMessage.toLowerCase().includes('hola') ? "Saludos, usuario. Sistema operativo." : "Comando procesado correctamente."),
      "ACCEDIENDO A BASE DE DATOS...\n> Información recuperada\n> Tu solicitud ha sido registrada en el sistema.",
      "EJECUTANDO PROTOCOLO...\n> Estado: ACTIVO\n> Respuesta generada con éxito.",
      "COMPILANDO RESPUESTA...\n> Verificación de seguridad: OK\n> Datos transmitidos correctamente.",
      "ESCANEANDO PARAMETROS...\n> Análisis completado\n> Sistema funcionando dentro de parámetros normales."
    ];
    
    if (userMessage.toLowerCase().includes('matrix')) {
      return "MATRIZ DETECTADA...\n> Neo, ¿eres tú?\n> La píldora roja te espera...";
    }
    
    if (userMessage.toLowerCase().includes('hack') || userMessage.toLowerCase().includes('código')) {
      return "MODO HACKER ACTIVADO...\n> Acceso root concedido\n> Iniciando secuencia de exploración...";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: MessageType = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
      isTyping: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          sessionId: process.env.NEXT_PUBLIC_URL
        }),
      });

      const data = await response.json();

      const botResponse: MessageType = {
        id: Date.now() + 1,
        text: data.message || "Lo siento, no pude procesar tu mensaje.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString(),
        isTyping: true
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: MessageType = {
        id: Date.now() + 1,
        text: "Error de conexión. Por favor, inténtalo de nuevo.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString(),
        isTyping: true
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-5 right-5 pointer-events-auto bg-black border-2 border-green-500 text-green-400 hover:bg-green-500/20 hover:text-green-300 px-4 py-2 rounded font-mono text-sm transition-all duration-300 shadow-lg hover:shadow-green-500/50"
        style={{
          boxShadow: isVisible ? '0 0 20px rgba(0, 255, 0, 0.3)' : '0 0 10px rgba(0, 255, 0, 0.1)',
          zIndex: 1001
        }}
      >
        {isVisible ? '[X] CLOSE' : '[>_] HÁBLAME'}
      </button>

      {/* Chat Window */}
      {isVisible && (
        <div
          className="fixed bottom-20 right-5 pointer-events-auto bg-black border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl"
          style={{
            width: '400px',
            height: '600px',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.4)',
            zIndex: 1000
          }}
        >
          {/* Terminal Header */}
          <div className="bg-black border-b border-green-500 p-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-green-400 text-xs font-mono">MATRIX_TERMINAL_v2.1</span>
            <div className="text-green-400 text-xs font-mono">{new Date().toLocaleTimeString()}</div>
          </div>

          {/* Messages Area */}
          <div className="relative h-full bg-black overflow-hidden">
            <MatrixRain className="absolute inset-0" />
            
            <div 
              className="relative z-10 h-full flex flex-col"
              style={{ background: 'rgba(0, 0, 0, 0.85)' }}
            >
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ paddingBottom: '150px' }}>
                {messages.map((message) => (
                  <div key={message.id} className="animate-fadeIn">
                    <div className="text-green-300 text-xs font-mono mb-1">
                      [{message.timestamp}] {message.sender === 'user' ? 'USER' : 'SYSTEM'}
                    </div>
                    <div className={`font-mono text-sm ${message.sender === 'user' ? 'text-cyan-400' : 'text-green-400'}`}>
                      {message.sender === 'user' ? '> ' : '$ '}
                      {message.isTyping && message.sender === 'bot' ? (
                        <TypewriterText text={message.text} speed={30} />
                      ) : (
                        <span style={{ whiteSpace: 'pre-line' }}>{message.text}</span>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="animate-pulse">
                    <div className="text-green-300 text-xs font-mono mb-1">
                      [{new Date().toLocaleTimeString()}] SYSTEM
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      $ <span className="animate-pulse">PROCESANDO</span>
                      <span className="animate-ping ml-1">...</span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area - Mejorada */}
              <div className="absolute bottom-10 left-0 right-0 border-t border-green-500/50 bg-black/90 p-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 font-mono text-sm flex-shrink-0">root@matrix:~$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ingresa tu comando..."
                    className="flex-1 bg-black border border-green-500/30 text-green-400 font-mono text-sm outline-none placeholder-green-600 px-2 py-1 rounded focus:border-green-500 focus:shadow-sm focus:shadow-green-500/20"
                    style={{ caretColor: '#00ff00' }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-green-500/20 hover:bg-green-500/30 disabled:bg-green-500/10 border border-green-500 disabled:border-green-500/30 text-green-400 disabled:text-green-600 px-3 py-1 rounded font-mono text-xs transition-all duration-200 hover:shadow-sm hover:shadow-green-500/30 active:scale-95"
                  >
                    ▶ SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MatrixChatbot;
