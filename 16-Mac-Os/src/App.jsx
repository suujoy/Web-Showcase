import React from "react";
import "./app.scss";
import Doc from "./Doc";
import Nav from "./components/Nav";
import WindowsWindow from "./components/windows/WindowsWindow";
import Github from "./components/windows/Github";

const App = () => {
    return (
        <main>
            <Nav />
            <Doc />

            <Github />
        </main>
    );
};

export default App;
