import { FilterBase } from "./filter.base.model";

export class Device extends FilterBase {
    static default = new Device('');
    static make = (name: string): Device => new Device(name);
    static makeFromMetadata = (meta: any): Device => new Device(`${meta.Make} ${meta.Model}`);
    
    constructor(
        public name: string 
    ) {
        super();
    }

    equals(o: any): boolean {
        return o instanceof Device && o.name === this.name;
    }
}