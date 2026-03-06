import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Markdown from "react-markdown";
import WindowsWindow from "./WindowsWindow";
import "./note.scss";

const Note = () => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch("/note.txt")
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <WindowsWindow>
            <div className="note-window">
                {markdown ? (
                    <SyntaxHighlighter
                        language="typescript"
                        style={atelierDuneDark}
                    >
                        {markdown}
                    </SyntaxHighlighter>
                ) : (
                    <p>Loading....</p>
                )}
            </div>
        </WindowsWindow>
    );
};

export default Note;
