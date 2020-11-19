import { Localization } from "./localization.model";

export class SearchOptions { 
    constructor(
        public localization: Localization,
        public dateInterval: {min: any, max: any},
    ) {}
}