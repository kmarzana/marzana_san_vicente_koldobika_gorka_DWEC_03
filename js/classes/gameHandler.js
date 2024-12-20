import { GAME_DOM_ELEMENTS } from "../config.js";
import { navigateTo } from "../modules/navigateTo.js";
const { compareButton, compareError } = GAME_DOM_ELEMENTS;

import { loadDataToLocalStorage, getParsedDataFromLocalStorage, showMessage } from "../utils/utils.js";

export class PixelGrid {
    constructor(containerId, rows, cols, pixelSize) {
        this.container = document.getElementById(containerId);
        this.rows = rows;
        this.cols = cols;
        this.pixelSize = pixelSize;
        this.gridArray = [];
        this.containerId = containerId;

        this.initGrid();

        if (this.containerId === 'player-grid') {
            this.initSaveButton();
        } else if (this.containerId === 'challenge-grid') {
            loadDataToLocalStorage('challenge-grid-pixelArt', JSON.stringify(this.gridArray));
        }
    }

    initGrid() {
        this.container.innerHTML = '';
        this.gridArray = [];

        this.container.style.display = 'grid';
        this.container.style.gridTemplateColumns = `repeat(${this.cols}, ${this.pixelSize}px)`;
        this.container.style.gridTemplateRows = `repeat(${this.rows}, ${this.pixelSize}px)`;
        this.container.style.gap = '1px';

        for (let i = 0; i < this.rows * this.cols; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = `${this.pixelSize}px`;
            pixel.style.height = `${this.pixelSize}px`;

            if (this.containerId === 'challenge-grid') {
                const color = Math.random() > 0.5 ? 'black' : 'white';
                pixel.style.backgroundColor = color;
                this.gridArray.push({ id: `pixel-${i}`, color });
            } else {
                pixel.style.backgroundColor = 'white';
                this.gridArray.push({ id: `pixel-${i}`, color: 'white' });
                pixel.addEventListener('click', () => this.togglePixelColor(pixel, i));
            }

            this.container.appendChild(pixel);
        }
    }

    togglePixelColor(pixel, index) {
        const currentColor = pixel.style.backgroundColor;
        const newColor = currentColor === 'white' ? 'black' : 'white';
        pixel.style.backgroundColor = newColor;

        this.gridArray[index].color = newColor;
    }

    areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
    
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].color !== arr2[i].color) {
                return false;
            }
        }
        return true;
    }
    
    initSaveButton() {
        if (compareButton) {
            compareButton.addEventListener('click', () => {    
                const challengeGrid = getParsedDataFromLocalStorage('challenge-grid-pixelArt');
                let userGrid = this.gridArray;

                if (this.areArraysEqual(challengeGrid, userGrid)) {
                    compareError.style.color = 'green';
                    
                    showMessage(compareError, 'Conseguido! Las imagenes son iguales!');

                    setTimeout(() => {
                        navigateTo('../../html/welcome.html');
                    }, 3000);
                    
                    navigateTo('../../html/welcome.html');
                } else {
                    compareError.style.color = 'red';

                    showMessage(compareError, 'Error. Las imagenes no son iguales.');

                    setTimeout(() => {
                        showMessage(compareError, '');
                    }, 4000);
                }
            });
        }
    }
    
}
