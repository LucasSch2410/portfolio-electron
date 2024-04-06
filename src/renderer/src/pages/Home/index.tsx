import { AnimatedText } from "../../components/AnimatedText/AnimatedText";
import { Stacks } from "../../components/Stacks/Stacks"
import { AllCards } from "../../components/AllCards/AllCards";
import { SocialTitle } from "../../components/SocialTitle/SocialTitle";

export const Home = () => {
    return (
        <main className="max-w-5xl mx-auto py-6 px-10 md:px-0">
            <section className="max-w-5xl py-8">
                <SocialTitle />
            </section>

            <section className="max-w-5xl flex flex-col lg:flex-row gap-16 lg:gap-20 mx-auto mt-6 lg:mt-14">
                <div className="w-full lg:w-1/2">
                    <AnimatedText once text={["Meu nome é Lucas Schroeder.", "Sou um desenvolvedor web com dois anos de experiência e estou cursando o último semestre da faculdade de Análise e Desenvolvimento de sistemas.",
                        "Tenho sólidos conhecimentos em desenvolvimentos de aplicações web usando JavaScript, TypeScript, NodeJS e React.",
                        "Estudando Python e Java no momento. Interessado em linguagens orientada a objetos e Data Science/AI."]}
                        el="p" className="text-xl lg:text-xl font-medium text-neutral-300" />
                </div>

                <div className="w-full lg:w-1/2">
                    <Stacks />
                </div>
            </section>

            <section className="max-w-5xl mx-auto mt-14">
                <AllCards />
            </section>
        </main>
    )
}
