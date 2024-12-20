export function startCountdown(e, timeRemaining) {
    return new Promise((resolve) => {
        const timer = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(timer); // Detiene el temporizador
                e.textContent = '0'; // Actualiza el contenido del elemento
                resolve(); // Solo resuelve sin valor adicional
            } else {
                e.textContent = timeRemaining;
                timeRemaining--;
            }
        }, 1000);
    });
}
