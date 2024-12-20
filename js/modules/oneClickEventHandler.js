import { INDEX_DOM_ELEMENTS } from "../config.js";
const { indexButton } = INDEX_DOM_ELEMENTS;

import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { loginButton } = LOGIN_DOM_ELEMENTS;

import { WELCOME_DOM_ELEMENTS } from "../config.js";
const { levelButtons, logoutIconContainer } = WELCOME_DOM_ELEMENTS;

import { navigateTo } from '../modules/navigateTo.js';
import { loadDataToLocalStorage } from "../utils/utils.js";

import { GAME_DOM_ELEMENTS } from "../config.js";
const { compareButton } = GAME_DOM_ELEMENTS;

export function oneClickEventHandler() {
    [indexButton, loginButton, ...levelButtons, logoutIconContainer, compareButton].forEach(e => {
        if (e != null) {
            e.addEventListener('click', function (event) {
                e.style.transition = 'all 0.3s ease';
                e.style.backgroundColor = '#5FC23A';

                setTimeout(() => {
                    e.style.backgroundColor = '#408628';
                }, 300);

                if (e.textContent === 'ACCEDER AL JUEGO') {
                    navigateTo('../../html/login.html', false);
                }
                if (e.className === 'logout-icon-container') {
                    navigateTo('../../index.html', true);
                    return;
                }
                if (e.id === 'level-easy') {
                    loadDataToLocalStorage('game-difficulty', 'easy');
                    navigateTo('../../html/game.html', true);
                    return;
                }
                if (e.id === 'level-hard') {
                    loadDataToLocalStorage('game-difficulty', 'hard');
                    navigateTo('../../html/game.html', true);
                    return;
                }
                if (e.id === 'level-expert') {
                    loadDataToLocalStorage('game-difficulty', 'expert');
                    navigateTo('../../html/game.html', true);
                    return;
                }
            });
        }
    });
}
