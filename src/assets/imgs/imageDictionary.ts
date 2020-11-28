import { Photo } from "../../core/model/photo.model";

const BASE_PATH='assets/imgs/';

export const imagesPaths = [
    `${BASE_PATH}bordmer.jpg`,
    `${BASE_PATH}ecluse.jpg`,
    `${BASE_PATH}logo.png`,
    `${BASE_PATH}monte_perdido.jpg`,
    `${BASE_PATH}pc.jpg`,
    `${BASE_PATH}plaine.jpg`,
    `${BASE_PATH}port.jpg`,
];

export const defaultImages = imagesPaths.map(path => new Photo(path));