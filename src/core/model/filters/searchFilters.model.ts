import { SearchService } from "../../../services/search/search.service";
import { Localization } from "./localization.model";

export class SearchFilters {
    static default = new SearchFilters([]);

    constructor(
        public localizations: Localization[],
    ) {}

    with(
        localizations: Localization[]
    ): SearchFilters {
        return new SearchFilters(
            localizations || this.localizations
        );
    }
}