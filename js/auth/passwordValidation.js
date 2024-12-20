import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { pwd, loginInfoMessage } = LOGIN_DOM_ELEMENTS;

import { patternValidation } from "../utils/utils.js";
import { showMessage, hideElementVisibilityHidden } from "../utils/utils.js";

export function passwordValidation() {
    pwd.addEventListener('input', function () {
        let input = this.value;
        
        if (!patternValidation(input) && input.length !== 0) {
            showMessage(loginInfoMessage, 'Error. La contraseña debe ser alfanumérica.');
        } else {
            hideElementVisibilityHidden(loginInfoMessage);
        }
    });
}