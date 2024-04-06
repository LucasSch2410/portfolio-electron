import { ButtonRotateBorder } from "../../components/ButtonRotateBorder/ButtonRotateBorder"
import { motion } from "framer-motion"
import { GithubLogo, LinkedinLogo, WhatsappLogo, Copy } from "@phosphor-icons/react";
import { useMouseContext } from "../../context/mouseContext";

export const SocialTitle = () => {
    const {setCursorVariant} = useMouseContext();

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const title = {
        initial: { opacity: 0, x: -220 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 160,
                damping: 20
            }
        }
    }

    const social = [
        {
            title: "GitHub",
            link: "http://github.com/lucassch2410",
            logo: GithubLogo
        },
        {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/schroederdev",
            logo: LinkedinLogo
        },
        {
            title: "WhatsApp",
            link: "https://wa.me/5547988139924",
            logo: WhatsappLogo
        }
    ]

    return (
        <div className="flex flex-col gap-6 md:max-w-3xl">
            <motion.h1 className="text-4xl lg:text-5xl font-bold text-white"
                variants={title} initial="initial" animate="animate"
                onMouseEnter={() => setCursorVariant("titles")} onMouseLeave={() => setCursorVariant("default")} >
                Lucas Schroeder -- Full-Stack Developer
            </motion.h1>
            <div className="flex flex-col gap-6 md:max-w-2xl">
                <motion.h2 className="text-2xl lg:text-lg font-medium text-[#c0c0c0]"
                    variants={title} initial="initial" animate="animate">
                    <span>Focado no Back-End.</span>
                </motion.h2>

                <motion.div className="flex flex-col w-full gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row mt-2"
                    variants={container} initial="hidden" animate="visible">

                    {social.map((item, itemIndex) => (
                        <ButtonRotateBorder key={itemIndex}>
                            <a className="flex items-center justify-center w-full gap-2 px-4 py-2 text-2xl md:text-xl lg:text-base" 
                            title={item.title} href={item.link} target="_blank" onMouseEnter={() => setCursorVariant("contact")} onMouseLeave={() => setCursorVariant("default")}>
                                <span className="subpixel-antialiased">{item.title}</span>
                                <item.logo />
                            </a>
                        </ButtonRotateBorder>
                    ))}

                    <ButtonRotateBorder copyEmail>
                        <div className="flex items-center justify-center w-full gap-2 px-4 py-2 text-2xl md:text-xl lg:text-base" 
                        onMouseEnter={() => setCursorVariant("contact")} onMouseLeave={() => setCursorVariant("default")}>
                            <span>E-mail</span>
                            <Copy />
                        </div>
                    </ButtonRotateBorder>
                </motion.div>
            </div>
        </div>
    )
}