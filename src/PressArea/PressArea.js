import './PressArea.css'

function PressArea() {
    return (
        <div class="pressArea">
            <CaptchaButtonsGroup />
        </div>
    );
}

function CaptchaButtonsGroup() {
    return (
        <div class="captcha-buttons-group">
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
            <CaptchaButton />
        </div>
    );
}

function CaptchaButton() {
    return (
        <div class="captchaButton">
            <h1>A</h1>
        </div>
    );
}

export default PressArea;