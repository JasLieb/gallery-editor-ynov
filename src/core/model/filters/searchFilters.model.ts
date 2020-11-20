import { Device } from "./device.model";
import { Localization } from "./localization.model";

export class SearchFilters {
    static default = new SearchFilters([], []);

    constructor(
        public localizations: Localization[],
        public devices: Device[],
    ) {}

    with(newSearchFilters: {
        localizations?: Localization[],
        devices?: Device[]
    }): SearchFilters {
        return new SearchFilters(
            newSearchFilters.localizations || this.localizations,
            newSearchFilters.devices || this.devices
        );
    }
}