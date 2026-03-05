import React, { useEffect, useState } from "react";

const DateTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const weekday = time.toLocaleString("en-IN", { weekday: "short" });
    const day = time.getDate();
    const month = time.toLocaleString("en-IN", { month: "short" });
    const clock = time
        .toLocaleString("en-IN", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        })
        .toLowerCase();

    return <div>{`${weekday} ${day} ${month} ${clock}`}</div>;
};

export default DateTime;
