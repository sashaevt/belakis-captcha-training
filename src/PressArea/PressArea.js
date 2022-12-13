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

    const buttonsArray = [];
    for (let i = 0; i < 8; i++) {
        buttonsArray.push(
            <CaptchaButton key={i} letter={ getRandomLetter(letters) } />
        )
    }
    return (
        <div className="captcha-buttons-group">
            { buttonsArray }
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