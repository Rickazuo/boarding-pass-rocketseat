const min = 1;

export function getRandomInt(max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
