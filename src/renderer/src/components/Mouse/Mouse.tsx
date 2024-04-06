import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion"
import { useMouseContext } from "../../context/mouseContext";

export const Mouse = ({ 
    refMouse 
}: any) => {
    const {cursorVariants} = useMouseContext();

    const mouse = useMouse(refMouse, {
        fps: 75
    });

    let mouseXPosition = -100;
    let mouseYPosition = -100;

    if (mouse.clientX !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.clientY !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: 50,
            width: 50,
            x: mouseXPosition - 20,
            y: mouseYPosition - 20,
            transition: {
                type: "spring",
                opacity: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                height: { duration: 0.2 },
                width: { duration: 0.2 },
                fontSize: { duration: 0.2 },
                x: { type: "spring", duration: 0.1 },
                y: { type: "spring", duration: 0.1 }
              }
        },
        contact: {
            opacity: 1,
            backgroundColor: "#ffffff",
            color: "#000",
            height: 25,
            width: 25,
            x: mouseXPosition - 18,
            y: mouseYPosition - 18,
            transition: {
                type: "spring",
                backgroundColor: { duration: 0.2 },
                height: { duration: 0.2 },
                width: { duration: 0.2 },
                x: { type: "spring", duration: 0.1 },
                y: { type: "spring", duration: 0.1 },
              }
        },
        titles: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: 180,
            width: 180,
            x: mouseXPosition - 100,
            y: mouseYPosition - 100,
            transition: {
                type: "spring",
                opacity: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                height: { duration: 0.2 },
                width: { duration: 0.2 },
                fontSize: { duration: 0.2 },
                x: { type: "spring", duration: 0.1 },
                y: { type: "spring", duration: 0.1 }
              }
        },
        mouseOut: {
            opacity: 0,
            x: -100,
            y: -100,

            transition: {
                opacity: { type: "tweek", duration: 0 },
                x: { type: "tweek", duration: 0},
                y: { type: "tweek", duration: 0}
            }
        }
    };

    // function projectEnter() {
    //     setCursorText("");
    //     setCursorVariant("project");
    // }

    // function projectLeave() {
    //     setCursorText("");
    //     setCursorVariant("default");
    // }

    // function contactLeave() {
    //     setCursorText("");
    //     setCursorVariant("default");
    // }

    return (
        <> {window.innerWidth < 768
            ? <></>
            :
            <motion.div variants={variants}
                className={"circle " + cursorVariants}
                animate={cursorVariants}>
                <span className='cursorText'></span>
            </motion.div>
        }
        </>
    )
}