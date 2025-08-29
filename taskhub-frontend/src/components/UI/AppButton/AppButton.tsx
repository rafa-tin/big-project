import type React from "react";

type AppButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AppButton({
  children,
  className = "",
  onClick,
}: AppButtonProps) {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
