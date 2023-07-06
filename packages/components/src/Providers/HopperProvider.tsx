import { ReactNode } from "react";
import packageJson from "../../package.json" assert { type: "json" };
import { ColorSchemeProvider } from "./ColorSchemeProvider.tsx";
import { GlobalStyleProvider } from "./GlobalStyleProvider.tsx";
import { TokensProvider } from "./TokensProvider.tsx";
import { ColorScheme, ColorSchemeOrSystem } from "./useColorScheme.ts";

export interface HopperProviderProps {
    children: ReactNode;
    withGlobalStyles?: boolean;
    withTokens?: boolean;
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

// TODO: use the major version only to determine if we should duplicate tokens or not.
const DefaultScope = `hop-${packageJson.version.replaceAll(".", "-")}`

export function HopperProvider({ children, withGlobalStyles = false, withTokens = false, colorScheme, defaultColorScheme, scope = DefaultScope }: HopperProviderProps) {
    return (
        <ColorSchemeProvider colorScheme={colorScheme} defaultColorScheme={defaultColorScheme} scope={scope}>
                <BreakpointProvider>
                    {withGlobalStyles && <GlobalStyleProvider scope={scope}/>}
                    {withTokens && <TokensProvider scope={scope}/>}

                    {children}
                </BreakpointProvider>
        </ColorSchemeProvider>
    );
}

function BreakpointProvider({ children} : {children: ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}
