import { Button, HtmlInput, TextInput, useColorSchemeContext } from "@small-ds/components";

export function About() {
    const { setColorScheme, colorScheme } = useColorSchemeContext();

    return (
        <>
            <h1>About</h1>
            <div>Hello from the about page</div>
            <Button label="Change color scheme!" onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")} />
            <TextInput />
            <HtmlInput />
        </>
    );
}
