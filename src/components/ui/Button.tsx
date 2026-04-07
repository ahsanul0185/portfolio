import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
};

export default function Button({
  children,
  icon,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  href,
  target,
  rel,
  download,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center border border-primary justify-center gap-2 py-2 px-4 font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-white",
    outline: "bg-transparent border border-primary text-primary hover:bg-white hover:text-black",
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={finalClassName}
        onClick={onClick}
      >
        {icon && <span className="text-xl inline-flex">{icon}</span>}
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {icon && <span className="text-xl inline-flex">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
}
