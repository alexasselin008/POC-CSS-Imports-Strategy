import { HopperProvider } from "@small-ds/components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <HopperProvider withGlobalStyles withTokens colorScheme="light">
            <App />
        </HopperProvider>
    </StrictMode>
);
