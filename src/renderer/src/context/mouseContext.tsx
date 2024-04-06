import React, {
    ReactNode,
    useState,
    createContext,
    useContext,
} from "react";

interface iMouseContext {
    cursorVariants: string;
    setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
}

interface iMouseChildren {
    children: ReactNode;
}

export const MouseContext = createContext<iMouseContext>({} as iMouseContext);

export const MouseProvider = ({ children }: iMouseChildren) => {
    const [cursorVariants, setCursorVariant] = useState("default");

    return (
        <MouseContext.Provider 
            value={{cursorVariants, setCursorVariant}}>
                {children}
        </MouseContext.Provider>
    );
}

export const useMouseContext = (): iMouseContext => {
    const context = useContext(MouseContext);

    return context;
};