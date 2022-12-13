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
    const currentLettersArray = [];
    for (let i = 0; i < 8; i++) {
        let currentLetter = getRandomLetter(letters);
        currentLettersArray.push(currentLetter);
        let classToApply = 'captcha-button captcha-button-' + i;
        buttonsArray.push(
            <CaptchaButton key={i} letter={ currentLetter } class={ classToApply }/>
        )
    }

    useEffect(() => {
        document.addEventListener('keypress', detectKeyPress, true)
    });

    const detectKeyPress = (event) => {
        console.log(event.key)
        console.log(event.key === buttonsArray[0]?.props.letter)
        currentLettersArray.shift()
        console.log(buttonsArray[0])
        console.log(event.currentTarget)
        buttonsArray.shift()
    }

    return (
        <div className="captcha-buttons-group">
            { buttonsArray }
        </div>
    );
}

function CaptchaButton(props) {
    return (
        <div className={props.class}>
            <div>{ props.letter.toUpperCase() }</div>
        </div>
    );
}

export default PressArea;