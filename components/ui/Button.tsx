import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-electric-blue hover:bg-electric-blue-dark text-white shadow-[0_0_20px_rgba(0,112,243,0.4)]",
    secondary: "bg-transparent border border-white/20 hover:bg-white/10 text-white",
    whatsapp: "bg-neon-green hover:bg-green-400 text-graphite-950 font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)]",
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
