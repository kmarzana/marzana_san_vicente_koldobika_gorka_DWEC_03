import { INDEX_DOM_ELEMENTS } from "../config.js";
const { indexButton } = INDEX_DOM_ELEMENTS;

import { LOGIN_DOM_ELEMENTS } from "../config.js";
const { loginButton, pwd, usr } = LOGIN_DOM_ELEMENTS;

import { WELCOME_DOM_ELEMENTS } from "../config.js";
const { levelButtons } = WELCOME_DOM_ELEMENTS;

import { GAME_DOM_ELEMENTS } from "../config.js";
const { compareButton } = GAME_DOM_ELEMENTS;

export function focusBlurEventHandler() {
    [indexButton, loginButton, pwd, usr, ...levelButtons, compareButton].forEach(e => {
        if (e !== null) {
            e.addEventListener('focus', function() {
                if (e.tagName === 'INPUT') {
                    e.style.border = '3px dashed  #408628';
                } else {
                    e.style.backgroundColor = '#408628';
                }
            })
            e.addEventListener('blur', function() {
                e.style.backgroundColor = '';
                e.style.border = '';
            })
        }
    })
}