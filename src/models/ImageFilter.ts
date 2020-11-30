export class ImageFilter {
    private defaultGrayscale = "0%";
    private defaultBlur = "0px";
    private defaultContrast = "100%";
    private defaultBrightness = "1";
    private defaultInvert = "0%";
    private defaultSepia = "0%";

    public grayscale: string;
    public blur: string;
    public contrast: string;
    public brightness: string;
    public invert: string;
    public sepia: string;

    constructor(filter?: ImageFilter) {
        if (filter) {
            this.grayscale = filter.grayscale;
            this.blur = filter.blur;
            this.contrast = filter.contrast;
            this.brightness = filter.brightness;
            this.invert = filter.invert;
            this.sepia = filter.sepia;
        } else {
            console.log("empty ctor")
            this.init();
        }
    }

    init(){
        this.grayscale = this.defaultGrayscale;
        this.blur = this.defaultBlur;
        this.contrast = this.defaultContrast;
        this.brightness = this.defaultBrightness;
        this.invert = this.defaultInvert;
        this.sepia = this.defaultSepia;
    }

    toggleNone() {
        this.init();
        return this;
    }
    
      toggleGray() {
        this.grayscale = this.grayscale === this.defaultGrayscale ? "80%" : this.defaultGrayscale;
        return this;
      }
    
      toggleBlur() {
        this.blur = this.blur === this.defaultBlur ? "2px" : this.defaultBlur;
        return this;
      }
    
      toggleContrast() {
        this.contrast = this.contrast === this.defaultContrast ? "150%" : this.defaultContrast;
        return this;
      }
    
      toggleBright() {
        this.brightness = this.brightness === this.defaultBrightness ? "1.5" : this.defaultBrightness;
        return this;
      }
    
      toggleInvert() {
        this.invert = this.invert === this.defaultInvert ? "100%" : this.defaultInvert;
        return this;
      }
    
      toggleSepia() {
        this.sepia = this.sepia === this.defaultSepia ? "80%" : this.defaultSepia;
        return this;
      }
}