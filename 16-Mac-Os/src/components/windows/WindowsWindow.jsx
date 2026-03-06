import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const WindowsWindow = ({ children }) => {
    return (
        <Rnd
            default={{ width: "35vw", height: "60vh", x: 200, y: 70 }}
            dragHandleClassName="nav"
        >
            <div className="window">
                <nav className="nav">
                    <div className="title">
                        <p>sujoy - powershell</p>
                    </div>

                    <div className="controls">
                        <div className="control minimize">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="5"
                                    y1="12"
                                    x2="19"
                                    y2="12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <div className="control maximize">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="5"
                                    y="5"
                                    width="14"
                                    height="14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <div className="control close">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="6"
                                    y1="6"
                                    x2="18"
                                    y2="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <line
                                    x1="18"
                                    y1="6"
                                    x2="6"
                                    y2="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>
                <div className="main-content">{children}</div>
            </div>
        </Rnd>
    );
};

export default WindowsWindow;
