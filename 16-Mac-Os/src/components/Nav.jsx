import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
    return (
        <nav>
            {/**
             * Nav Left
             */}
            <div className="left">
                {/* {Apple Icon} */}
                <div className="apple-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 15.3137 19.3137 18 16 18C12.6863 18 10 15.3137 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 16.4183 11.5817 20 16 20C16.8708 20 17.7084 19.8588 18.4932 19.6016C16.7458 21.0956 14.4792 22 12 22C6.6689 22 2.3127 17.8283 2.0166 12.5713C2.23647 9.45772 4.83048 7 8 7C11.3137 7 14 9.68629 14 13C14 13.5523 14.4477 14 15 14C15.5523 14 16 13.5523 16 13C16 8.58172 12.4183 5 8 5C6.50513 5 5.1062 5.41032 3.90918 6.12402C5.72712 3.62515 8.67334 2 12 2Z"></path>
                    </svg>
                </div>
                <div className="nav-item">
                    <p>Sujoy Saha</p>
                </div>

                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>

            {/**
             * Nav Right
             */}
            <div className="right">
                <div className="nav-icom">
                    <img src="./navbar-icon/wifi.svg" alt="" />
                </div>

                {/* Data & Time  Component*/}
                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
