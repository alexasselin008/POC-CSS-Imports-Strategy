import { ReactNode, useState } from "react";
import { ColorSchemeContext } from "./ColorSchemeContext.ts";
import { ColorScheme, ColorSchemeOrSystem, useColorScheme } from "./useColorScheme.ts";

export interface ColorSchemeProviderProps {
    children: ReactNode;
    scope?: string
    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;
    /**
     * Default color scheme to use when a user preferred color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;
}

export function ColorSchemeProvider({children, colorScheme,defaultColorScheme,scope}: ColorSchemeProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState<ColorScheme>();
    const computedColorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);

    return (
        <ColorSchemeContext.Provider
            value={{
                colorScheme: computedColorScheme,
                setColorScheme: setRemoteColorScheme
            }}
        >
            <div className={`hop hop-${computedColorScheme} ${scope} ${scope}-${computedColorScheme}`}>
                {children}
            </div>
        </ColorSchemeContext.Provider>
    );

}