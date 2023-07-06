import { createContext, useContext } from "react";

import { ColorScheme } from "./useColorScheme.tsx";

export interface ColorSchemeContextType {
    colorScheme: ColorScheme;
    setColorScheme: (newColorScheme: ColorScheme) => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextType>({
    colorScheme: "light",
    setColorScheme: () => {},
});

export function useColorSchemeContext(): ColorSchemeContextType {
    return useContext(ColorSchemeContext);
}
