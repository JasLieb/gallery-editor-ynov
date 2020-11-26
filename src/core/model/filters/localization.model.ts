import { FilterBase } from "./filter.base.model";

export class Localization extends FilterBase {
  static default = new Localization();
  
  static make(address: any): Localization {
    return new Localization(
      address.municipality || address.village,
      address.county,
      address.country
    );
  }

  constructor(
    public municipality: string = 'unknown',
    public county: string = 'unknown',
    public country: string = 'unknown'
  ) { 
    super();
  }

  equals(o: any): boolean {
    return o instanceof Localization
      && o.municipality === this.municipality
      && o.county === this.county
      && o.country === this.country;
  }
}
