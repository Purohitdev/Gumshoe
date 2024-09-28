import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Font = () => {
    const animatedTextRef = useRef(null);

    // Define the fonts and "Gumshoe" translation in different languages
    const fonts = [
        { font: 'Noto Sans SC, sans-serif', text: '侦探' }, // Chinese: Gumshoe
        { font: 'Noto Sans JP, sans-serif', text: '探偵' }, // Japanese: Gumshoe
        { font: 'Noto Sans Devanagari, sans-serif', text: 'जासूस' }, // Hindi: Gumshoe
        { font: 'Noto Naskh Arabic, sans-serif', text: 'جاسوس' }, // Urdu: Gumshoe
        { font: 'Noto Sans, sans-serif', text: 'сыщик' },            // Russian: Gumshoe
        { font: 'Noto Naskh Arabic, sans-serif', text: 'محقق' },      // Arabic: Gumshoe
        { font: 'Noto Sans KR, sans-serif', text: '탐정' },           // Korean: Gumshoe
        { font: 'Roboto, sans-serif', text: 'détective' },           // French: Gumshoe
        { font: 'Roboto, sans-serif', text: 'detective' },           // Spanish: Gumshoe
        { font: 'Noto Serif Greek, serif', text: 'ντετέκτιβ' },      // Greek: Gumshoe
        { font: 'Noto Sans Hebrew, sans-serif', text: 'בלש' },       // Hebrew: Gumshoe
        { font: 'Noto Sans Bengali, sans-serif', text: 'গোয়েন্দা' }, // Bengali: Gumshoe
    ];

    let currentFontIndex = 0;

    const changeFont = () => {
        const { font, text } = fonts[currentFontIndex];

        gsap.to(animatedTextRef.current, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                animatedTextRef.current.style.fontFamily = font;
                animatedTextRef.current.textContent = text; // Update the text content to "Gumshoe" in different languages
                gsap.to(animatedTextRef.current, {
                    duration: 0.5,
                    opacity: 1
                });
            }
        });

        // Update the font index
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
    };

    useEffect(() => {
        const intervalId = setInterval(changeFont, 200); // Change font every 200ms
        changeFont(); // Initial call

        // Stop the animation after 3 seconds
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId); // Clear the interval after 3 seconds
        }, 3000); // 3000ms = 3 seconds

        // Cleanup on component unmount
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="mid">
            <h1 ref={animatedTextRef} style={{ fontSize: '48px' }}>
                Gumshoe
            </h1>
        </div>
    );
};

export default Font;
