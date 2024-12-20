import { INDEX_DOM_ELEMENTS } from "../config.js";
const { indexButton } = INDEX_DOM_ELEMENTS;

import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { loginButton } = LOGIN_DOM_ELEMENTS;

import { WELCOME_DOM_ELEMENTS } from "../config.js";
const { levelButtons, logoutIconContainer } = WELCOME_DOM_ELEMENTS;

import { GAME_DOM_ELEMENTS } from "../config.js";
const { compareButton } = GAME_DOM_ELEMENTS;

export function mouseOverOutEventHandler() {
    [indexButton, loginButton, ...levelButtons, logoutIconContainer, compareButton].forEach(e => {
        if (e !== null) {
            e.addEventListener('mouseover', function() {
                if (e.className === 'logout-icon-container') {
                    e.style.backgroundColor = '#d6d6d6';
                } else {
                    e.style.backgroundColor = '#408628';
                }
                e.style.cursor = 'pointer';
            })

            e.addEventListener('mouseout', function() {
                e.style.backgroundColor = '';
            })
        }
    })
}