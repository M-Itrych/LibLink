import React, {useEffect, useRef, useState} from "react";
import style from "./introCard.module.css";

const IntroCard = ({number, title, text, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const introCardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {threshold: 0.9}
        );

        if (introCardRef.current) {
            observer.observe(introCardRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={introCardRef}
            className={`${style.introCard} ${isVisible ? style.visible : ""}`}
        >
            <span className={style.introNumber}>{number}.</span>
            <h1>{title}</h1>
            <p>{text}</p>
            {children}
        </div>
    );
};

export default IntroCard;
