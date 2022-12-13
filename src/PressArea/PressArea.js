import './PressArea.css'
import { useEffect } from 'react';

function PressArea() {
    return (
        <div class="pressArea">
            <CaptchaButtonsGroup />
        </div>
    );
}

function CaptchaButtonsGroup() {
    useEffect(() => {
        document.addEventListener('keypress', detectKeyPress, true)
    });

    const detectKeyPress = (event) => {
        
    }

    const letters = [
        'q', 'w', 'e', 'a', 's', 'd'
    ];

    function getRandomLetter(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    return (
        <div class="captcha-buttons-group">
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
            <CaptchaButton letter={getRandomLetter(letters)} />
        </div>
    );
}

function CaptchaButton(props) {
    return (
        <div class="captchaButton">
            <h1>{props.letter.toUpperCase()}</h1>
        </div>
    );
}

export default PressArea;