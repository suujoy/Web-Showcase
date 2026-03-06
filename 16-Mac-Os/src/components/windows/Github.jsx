import React from "react";
import githubData from "../../assets/github.json";
import "./github.scss";
import WindowsWindow from "./WindowsWindow";

const GitCard = ({
    data = {
        id: 1,
        image: "",
        title: "",
        description: "",
        tags: [],
        repoLink: "",
        demoLink: "",
    },
}) => {
    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {/* Tags */}

            <div className="tags">
                {data.tags.map((tag, index) => (
                    <p key={index} className="tag">
                        {tag}
                    </p>
                ))}
            </div>

            {/* Urls */}
            <div className="urls">
                <a href={data.repoLink} target="_blank" rel="noreferrer">Repository</a>
                {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
            </div>
        </div>
    );
};

const Github = () => {
    return (
        <WindowsWindow>
            <div className="cards">
                {githubData.map((project) => {
                    return <GitCard key={project.id} data={project} />;
                })}
            </div>
        </WindowsWindow>
    );
};

export default Github;
