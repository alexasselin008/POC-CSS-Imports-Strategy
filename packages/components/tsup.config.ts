import { defineBuildConfig } from "@workleap/tsup-configs";
import { cssModuleEsbuildPlugin } from "./cssModuleEsbuildPlugin.ts";

export default defineBuildConfig({
    entry: ["src/**/*.ts", "src/**/*.tsx"],
    esbuildPlugins: [cssModuleEsbuildPlugin],
});
