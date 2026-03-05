import React from "react";
import "./app.scss";
import Doc from "./Doc";
import Nav from "./components/Nav";
import WindowsWindow from "./components/windows/WindowsWindow";

const App = () => {
    return (
        <main>
            <Nav />
            <Doc />

            <WindowsWindow >
                <h1>Hello</h1>
            </WindowsWindow>
        </main>
    );
};

export default App;
