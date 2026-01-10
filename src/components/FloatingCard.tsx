
import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div 
      className={`glass rounded-2xl p-4 shadow-xl border border-white/50 animate-float ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '6s' }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
      {children}
    </div>
  );
};

export default FloatingCard;
