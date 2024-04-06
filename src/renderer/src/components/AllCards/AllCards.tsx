import { motion, useAnimation, useInView } from "framer-motion"
import { CardRevealedPointer } from "../../components/CardRevealedPointer/CardRevealedPointer";
import { useEffect, useRef } from "react";
import { useMouseContext } from "../../context/mouseContext";

export const AllCards = () => {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.3, once: true });
    const {setCursorVariant} = useMouseContext();

    useEffect(() => {
        const isDesktop = window.innerWidth > 2000;

        if (isInView) {
            if (isDesktop) {
                setTimeout(() => {
                    controls.start("visible");
                }, 1300)
            } else {
                controls.start("visible");
            }
        } else {
            controls.start("hidden");
        }
    }, [isInView]);

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{
            visible: {
                transition:
                {
                    staggerChildren: 0.25
                }
            },
            hidden: {}
        }}>
            <motion.h2 className="text-3xl font-bold text-white" variants={defaultAnimations}
            onMouseEnter={() => setCursorVariant("titles")} onMouseLeave={() => setCursorVariant("default")}
            >O que estou fazendo no momento</motion.h2>

            <div className="flex flex-col sm:flex-row gap-10 mt-6">
                <motion.div className="w-full sm:w-1/3" variants={defaultAnimations}>
                    <CardRevealedPointer title={"Faculdade"}>
                        Estou cursando Análise e Desenvolvimento de Sistemas na Anhanguera. No momento, estou focando os meus estudos em estrutura de dados e algoritmos,
                        junto com Python e Java. Como o meu desejo é trabalhar com Data Science, já me inscrevi em matérias extra curriculares de Análise de Dados com Python e
                        no programa de Iniciação Científica.
                    </CardRevealedPointer>
                </motion.div>
                <motion.div className="w-full sm:w-2/3" variants={defaultAnimations}>
                    <CardRevealedPointer title={"Python"}>
                        Uso Python na maioria dos meus projetos. Por ser uma linguagem versátil, simples e coerente, é a mais usada no meu dia a dia para trabalhos simples. Scrap,
                        API RESTful e manipulação de imagens são alguns dos meus projetos recentes, bem como Machine Learning e sistemas de busca e aprendizado para jogos simples como
                        Tic-Tac-Toe. Frameworks e bibliotecas como FASTApi, Flask, pandas e Pillow foram extremamente necessárias na minha jornada como programador.
                    </CardRevealedPointer>
                </motion.div>
            </div>
            <motion.div className="mt-10" variants={defaultAnimations}>
                <CardRevealedPointer title={"Desenvolvimento Web"}>
                    Trabalho com desenvolvimento web a cerca de dois anos, criando páginas para produtos em um grande webcommerce, hotsites e anúncios de novos produtos para milhares/milhões de pessoas. Meus interesses me lançaram para as
                    partes mais profundas dos códigos. Criar algoritmos complexos são tão prazerosos como o visual bonito de uma página. Me vi interessado em usar NodeJS e TypeScript para me aperfeiçoar,
                    bem como construir sistemas completos com banco de dados PostgreSQL ou SQLite. Desenvolver ambas as partes me fez ter uma ideia completa de como as peças se encaixam e como tudo
                    funciona como um conjunto para entregar uma experiência para o consumidor.
                </CardRevealedPointer>
            </motion.div>
        </motion.div>
    )
}