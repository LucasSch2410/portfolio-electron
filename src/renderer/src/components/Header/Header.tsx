import { Link } from "react-router-dom";
import { useMouseContext } from "../../context/mouseContext";
import { AnimatedTabs } from "../AnimatedTabs/AnimatedTabs";

export const Header = () => {
    const {setCursorVariant} = useMouseContext();

    return (
        <header>
            <div className="max-w-5xl mx-auto px-10 md:px-0">
                <div className="flex text-neutral-100">
                    <Link to={"/"} onMouseEnter={() => setCursorVariant("contact")} onMouseLeave={() => setCursorVariant("default")}>
                        <h1 className="text-[50px] font-light whitespace-nowrap select-none">LS</h1>
                    </Link>
                    <AnimatedTabs />
                </div>
            </div>
            <div className="h-[1px] bg-neutral-800"></div>
        </header>
    )
}