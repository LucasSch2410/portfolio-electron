import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    copyEmail?: boolean;
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const ButtonRotateBorder = ({ 
    children, copyEmail 
}: ButtonProps) => {
    const handleClick = () => {
        if (copyEmail) {
            navigator.clipboard.writeText("lucasschroeder2410@gmail.com");
            toast('E-mail copiado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <motion.button className="relative inline-flex overflow-hidden rounded-xl p-px" onClick={handleClick}
            variants={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
            <span className="subpixel-antialiased inline-flex h-full w-full items-center justify-center rounded-[11px] bg-neutral-950
          text-sm font-bold text-gray-50 backdrop-blur-3xl hover:bg-white hover:text-black">
                {children}
            </span>
        </motion.button>
    );
}