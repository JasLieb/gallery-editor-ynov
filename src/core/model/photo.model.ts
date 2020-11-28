import { SafeUrl } from "@angular/platform-browser";

export class Photo {
    constructor(
        public data: string | SafeUrl,
    ) {}
}