import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { pwd, pwdOn, pwdOff } = LOGIN_DOM_ELEMENTS;

import { hideElementVisibilityHidden, showElementVisibilityVisible } from "../utils/utils.js";

export function togglePasswordVisibility() {
    function clickHandler() {
        if (pwd.type === 'password') {
            pwd.type = 'text';

            hideElementVisibilityHidden(pwdOn);
            showElementVisibilityVisible(pwdOff);
        } else {
            pwd.type = 'password';
            showElementVisibilityVisible(pwdOn);
            hideElementVisibilityHidden(pwdOff);
        }
    }

    [pwdOn, pwdOff].forEach(e => {
        e.addEventListener('click', clickHandler);
    });

    [pwdOn, pwdOff].forEach(e => {
        e.addEventListener('mouseover', function () {
            this.style.cursor = 'pointer';
        });
    });
}