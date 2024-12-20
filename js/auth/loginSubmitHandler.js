import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { loginForm, usr, pwd, loginInfoMessage } = LOGIN_DOM_ELEMENTS;

import { showMessage, hideElementVisibilityHidden } from "../utils/utils.js";
import { getParsedDataFromLocalStorage, loadDataToLocalStorage } from "../utils/utils.js"
import { navigateTo } from "../modules/navigateTo.js";

export function loginSubmitHandler() {

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (usr.value.length === 0) {
            showMessage(loginInfoMessage, 'El nombre de usuario es obligatorio.');
            return;
        }

        if (pwd.value.length === 0) {
            showMessage(loginInfoMessage, 'La contraseña es obligatoria.');
            return;
        }

        let activeUsers = getParsedDataFromLocalStorage('erabiltzaileak');
        let user = activeUsers.find(u => u.usuario === usr.value.toLowerCase());        

        if (!user) {
            showMessage(loginInfoMessage, 'El usuario indicado no existe.');
            return;
        }

        if (user.contraseña !== pwd.value) {
            showMessage(loginInfoMessage, 'Error. Contraseña incorrecta.');
            return;
        }
        
        loginInfoMessage.style.color = '#5FC23A';

        showMessage(loginInfoMessage, 'Ongi etorri!  ' + `${user.nombre} ${user.apellido}`);
        loadDataToLocalStorage('pixelArt_logged_user', `${user.nombre} ${user.apellido}`);
        pwd.blur();
        usr.blur();
        this.reset();

        setTimeout(() => {
            navigateTo('../../html/welcome.html', true);
        }, 700);

        setTimeout(() => {
            loginInfoMessage.style.color = '';
            hideElementVisibilityHidden(loginInfoMessage);
        }, 2000);
    })
}