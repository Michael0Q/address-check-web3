

export const createMeteo = (ref: any) => {
    const meteoElement = document.createElement('div');
    meteoElement.classList.add('meteo');
    meteoElement.style.left = `${Math.random() * 100}%`;
    meteoElement.addEventListener('animationend', () => {
    meteoElement.remove();
    });
    ref.current?.appendChild(meteoElement);
};