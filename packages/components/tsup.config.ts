import { defineBuildConfig } from "@workleap/tsup-configs";
import { createCssModuleEsbuildPlugin } from "./cssModuleEsbuildPlugin.ts";
import packageJson from "./package.json";

export default defineBuildConfig({
    entry: ["src/**/*.ts", "src/**/*.tsx"],
    esbuildPlugins: [
        createCssModuleEsbuildPlugin({
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            hashPrefix: packageJson.version,
        })],
});