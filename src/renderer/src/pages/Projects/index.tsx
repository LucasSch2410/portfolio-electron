import { SliderHotsite } from "../../components/SliderHotsite/SliderHotsite";
import { Repositories } from "../../components/Repositories/Repositories";

export const Projects = () => {

    return (
        <main className="max-w-5xl mx-auto py-6 px-10 md:px-0">
            <section className="py-8">
                <SliderHotsite />
            </section>
            <section className="py-8">
                <Repositories/>
            </section>
        </main>
    )
}
