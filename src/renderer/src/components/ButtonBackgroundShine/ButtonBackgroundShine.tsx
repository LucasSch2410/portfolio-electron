import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const ButtonBackgroundShine = ({
    children 
}: ButtonProps) => {
    return (
        <button className="inline-flex animate-shine items-center justify-center rounded-2xl text-base border border-neutral-700 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium 
      text-neutral-400 hover:scale-105 hover:border-neutral-500 hover:text-neutral-300 transition duration-300 ease-in-out">
            {children}
        </button>
    );
}
