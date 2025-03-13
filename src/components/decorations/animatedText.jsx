import React, {useEffect, useState} from 'react';
import style from './animatedText.module.css';

const AnimatedText = ({customClass}) => {
    const words = ['Optimize', 'Enhance', 'Simplify'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(200);
    const [deletingSpeed] = useState(200);

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            if (isDeleting) {
                setText((prevText) => prevText.slice(0, prevText.length - 1));
            } else {
                setText(words[currentWordIndex].slice(0, text.length + 1));
            }

            if (!isDeleting && text === words[currentWordIndex]) {
                setTypingSpeed(1000);
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setTypingSpeed(150);
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed]);

    return (
        <>
            <span className={` ${style.animatedText} ${customClass} ${style.blinkBorderRight}`}>
              {text}
            </span>
        </>
    );
};

export default AnimatedText;