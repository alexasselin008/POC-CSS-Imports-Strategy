import { ReactNode } from "react";

export function BreakpointProvider({ children} : {children: ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}
