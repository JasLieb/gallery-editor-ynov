import { Localization } from "./localization.model";

export interface DateInterval {
    min?: Date;
    max?: Date;
}

export interface SearchOptions { 
    localization: Localization;
    dateInterval: DateInterval;
}