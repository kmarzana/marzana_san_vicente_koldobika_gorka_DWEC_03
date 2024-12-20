// Oculta completamente un elemento estableciendo su propiedad CSS `display` a `none`.
// Esto elimina el elemento del flujo de la página, por lo que no ocupa espacio.
export function hideElementsDisplayNone(e) {
    e.style.display = 'none';
}

// Oculta un elemento estableciendo su propiedad CSS `visibility` a `hidden`.
// El elemento no es visible, pero sigue ocupando espacio en el diseño.
export function hideElementVisibilityHidden(e) {
    e.style.visibility = 'hidden';
}

// Hace visible un elemento estableciendo su propiedad CSS `visibility` a `visible`.
// Esto solo tiene efecto si previamente el elemento fue ocultado con `visibility: hidden`.
export function showElementVisibilityVisible(e) {
    e.style.visibility = 'visible';
}

//---------------------------------------------------------------------------------

// Carga datos desde un archivo JSON y los guarda en localStorage.
export function loadDataFromJSONToLocalStorage(key, path) {
    fetch(path)
    .then(response => response.json())
    .then(data => localStorage.setItem(key, JSON.stringify(data)));
}

// Guarda directamente datos en localStorage.
export function loadDataToLocalStorage(key, data) {
    localStorage.setItem(key, data);
}

// Recupera y parsea datos de localStorage.
export function getParsedDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Recupera datos de localStorage sin parsearlos.
export function getDataFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function removeItemFromLocalStorage(key) {
    localStorage.removeItem(key);
}

//---------------------------------------------------------------------------------

// Muestra un mensaje en el elemento, haciéndolo visible y actualizando su texto.
export function showMessage(e, msg) {
    e.style.visibility = 'visible';
    e.textContent = msg;
}

//---------------------------------------------------------------------------------

export function patternValidation(string) {
    return /^[a-z0-9]+$/i.test(string);
}
