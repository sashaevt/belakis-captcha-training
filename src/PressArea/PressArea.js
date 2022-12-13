import './PressArea.css'
import { useEffect } from 'react';

function PressArea() {
    return (
        <div className="pressArea">
            <CaptchaButtonsGroup />
        </div>
    );
}

function CaptchaButtonsGroup() {
    const letters = [
        'q', 'w', 'e', 'a', 's', 'd'
    ];

    function getRandomLetter(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    return (
        <div className="captcha-buttons-group">
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
            <CaptchaButton letter={ getRandomLetter(letters) } />
        </div>
    );
}

function CaptchaButton(props) {
    useEffect(() => {
        document.addEventListener('keypress', detectKeyPress, true)
    });

    const detectKeyPress = (event) => {
        console.log(event.key)
        console.log(props.letter)
        console.log(event.key === props.letter.toLowerCase())
    }

    return (
        <div className="captcha-button">
            <div>{ props.letter.toUpperCase() }</div>
        </div>
    );
}

export default PressArea;