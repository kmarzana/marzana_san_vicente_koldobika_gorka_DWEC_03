import { INDEX_DOM_ELEMENTS } from "./config.js";
const { logout, ejercicio } = INDEX_DOM_ELEMENTS;

import { WELCOME_DOM_ELEMENTS } from "./config.js";
const { sessionExpireCountDown, loggedUser } = WELCOME_DOM_ELEMENTS;

import { BODY_IDS } from "./config.js";
const { indexBody, loginBody, welcomeBody, gameBody } = BODY_IDS;

import { GAME_DOM_ELEMENTS } from "./config.js";
const { gameExpireCountdown } = GAME_DOM_ELEMENTS;

import { hideElementsDisplayNone, loadDataFromJSONToLocalStorage, getDataFromLocalStorage, loadDataToLocalStorage, removeItemFromLocalStorage } from "./utils/utils.js";
import { focusBlurEventHandler } from "./modules/focusBlurEventHandler.js";
import { mouseOverOutEventHandler } from "./modules/mouseOverOutEventHandler.js";
import { oneClickEventHandler } from "./modules/oneClickEventHandler.js";
import { loginSubmitHandler } from "./auth/loginSubmitHandler.js";
import { passwordValidation } from "./auth/passwordValidation.js";
import { togglePasswordVisibility } from "./modules/togglePasswordVisibility.js";
import { navigateTo } from "./modules/navigateTo.js";
import { startCountdown } from "./modules/startCountdown.js";
import { PixelGrid } from "./classes/gameHandler.js";

ejercicio.textContent = document.title;

oneClickEventHandler();
mouseOverOutEventHandler();
focusBlurEventHandler(); 

if (document.body.id === indexBody) {
    hideElementsDisplayNone(logout);
    removeItemFromLocalStorage('refreshDetected');
}

if (document.body.id === loginBody) {
    hideElementsDisplayNone(logout);
    loadDataFromJSONToLocalStorage('erabiltzaileak', '../js/data/users.json');
    loginSubmitHandler(); 
    passwordValidation();
    togglePasswordVisibility();
}

if (document.body.id === welcomeBody) {
    loggedUser.textContent = getDataFromLocalStorage('pixelArt_logged_user');
    startCountdown(sessionExpireCountDown, 5).then(() => {
        navigateTo('../index.html', true);
    });
}

if (document.body.id === gameBody) {
    loggedUser.textContent = getDataFromLocalStorage('pixelArt_logged_user');

    const difficulty = getDataFromLocalStorage('game-difficulty');
    if (difficulty === 'easy') {
        let gameGrid = new PixelGrid("challenge-grid", 5, 5, 35);
        let playerGrid = new PixelGrid("player-grid", 5, 5, 35);

        startCountdown(gameExpireCountdown, 60).then(() => {
            navigateTo('../index.html', true);
        });
    }
    if (difficulty === 'hard') {
        let gameGrid = new PixelGrid("challenge-grid", 10, 10, 20);
        let playerGrid = new PixelGrid("player-grid", 10, 10, 20);

        startCountdown(gameExpireCountdown, 100).then(() => {
            navigateTo('../index.html', true);
        });
    }
    if (difficulty == 'expert') {
        let gameGrid = new PixelGrid("challenge-grid", 30, 30, 10);
        let playerGrid = new PixelGrid("player-grid", 30, 30, 10);

        startCountdown(gameExpireCountdown, 200).then(() => {
            navigateTo('../index.html', true);
        });
    }

    window.addEventListener('beforeunload', function() {
        loadDataToLocalStorage('refreshDetected', 'true');
    })

    window.addEventListener('DOMContentLoaded', function() {
        if (getDataFromLocalStorage('refreshDetected') === 'true') {
            removeItemFromLocalStorage('refreshDetected');

            navigateTo('../index.html', true);
        }
    })
}