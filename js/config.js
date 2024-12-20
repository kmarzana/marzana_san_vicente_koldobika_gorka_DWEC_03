// Contiene referencias a elementos del DOM en index.html
export const INDEX_DOM_ELEMENTS = {
    logout: document.querySelector('.logout-container'),
    indexButton: document.querySelector('#index-btn'),
    ejercicio: document.querySelector('.ejercicio'),
}

// Contiene referencias a elementos del DOM en login.html
export const LOGIN_DOM_ELEMENTS = {
    loginButton: document.querySelector('#submit-btn'),
    usr: document.querySelector('#username-input'),
    pwd: document.querySelector('#password-input'),
    loginForm: document.querySelector('#login-form'),
    loginInfoMessage: document.querySelector('.login-info-msg'),
    pwdOn: document.querySelector('.pwd-visibility-on'),
    pwdOff: document.querySelector('.pwd-visibility-off'),
}

export const WELCOME_DOM_ELEMENTS = {
    sessionExpireCountDown: document.querySelector('.countdown'),
    loggedUser: document.querySelector('.session-user'),
    levelButtons: [...document.querySelectorAll('.level-btn')],
    logoutIconContainer: document.querySelector('.logout-icon-container'),
}

export const GAME_DOM_ELEMENTS = {
    compareButton: document.querySelector('#compare-btn'),
    gameExpireCountdown: document.querySelector('.game-expiration-countdown'),
    compareError: document.querySelector('.compare-error'),
}

// Contiene identificadores de cuerpos (body) para distintas páginas
export const BODY_IDS = {
    indexBody: 'index-body',
    loginBody: 'login-body',
    welcomeBody: 'welcome-body',
    gameBody: 'game-body',
}
