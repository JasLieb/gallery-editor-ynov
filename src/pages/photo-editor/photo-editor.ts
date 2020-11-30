import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import domtoimage from "dom-to-image";
import { ImageFilter } from "../../models/ImageFilter";
//import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

/**
 * Generated class for the PhotoEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-photo-editor",
  templateUrl: "photo-editor.html",
})
export class PhotoEditorPage {
  imageSrc: string;

  constructor(
    /*private base64ToGallery: Base64ToGallery,*/ public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.imageSrc = "assets/imgs/testimg.jpg";
  }

  // grayFilter = false;
  // blurFilter = false;
  // contrastFilter = false;

  class = "";
  imageFilter = new ImageFilter();

  filtersList = [];

  // "ngOnChanges custom" pour mettre à jour l'appercu de toutes les previews lorsqu'un filtre est appliqué
  onApplyFilter() {
    this.refreshFiltersList();
  }

  ngOnInit() {
    this.refreshFiltersList();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PhotoEditorPage");
  }

  //Impossible de faire marcher le plugin
  //A chaque tentative de debug => le fichier config.xml se vide tout seul "Error: Cannot load empty config.xml file."
  //Impossible de lancer l'app sur navigateur
  //Le chrome dev tools fait planter l'application sur mobile.

  // Sauvegarde l'image dans la gallerie
  saveImg() {
    console.log("enregistrement de l'image");

    //let base64ToGallery = this.base64ToGallery;
    domtoimage
      .toPng(<HTMLInputElement>document.getElementById("edit-image"))
      .then(function (data) {
        console.log(data);

        // Ca marche jusqu'ici --------------

        // base64ToGallery.base64ToGallery(data).then(
        //   res => console.log('Saved image to gallery ', res),
        //   err => console.log('Error saving image to gallery ', err)
        // );
      });
  }

  // Découpe un tableau en tableaux de x éléments. Utile pour organiser les filtres en lignes
  chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let chunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(chunk);
    }

    return tempArray;
  }

  // Raffraichit la liste des filtres, composés d'un nom (affiché sur le btn), d'un filtre de preview (le filtre courant + le filtre du bouton)
  // et de la méthode appelée lors d'un clic
  // Pas la meilleure approche mais une solution qui fonctionne après tatonements
  refreshFiltersList() {
    this.filtersList = [
      {
        name: "Aucun",
        previewFilter: new ImageFilter(this.imageFilter).toggleNone(),
        action: () => {
          this.imageFilter.toggleNone();
          this.onApplyFilter();
        },
      },
      {
        name: "Gris",
        previewFilter: new ImageFilter(this.imageFilter).toggleGray(),
        action: () => {
          this.imageFilter.toggleGray();
          this.onApplyFilter();
        },
      },
      {
        name: "Flou",
        previewFilter: new ImageFilter(this.imageFilter).toggleBlur(),
        action: () => {
          this.imageFilter.toggleBlur();
          this.onApplyFilter();
        },
      },
      {
        name: "Contrasté",
        previewFilter: new ImageFilter(this.imageFilter).toggleContrast(),
        action: () => {
          this.imageFilter.toggleContrast();
          this.onApplyFilter();
        },
      },
      {
        name: "Lumineux",
        previewFilter: new ImageFilter(this.imageFilter).toggleBright(),
        action: () => {
          this.imageFilter.toggleBright();
          this.onApplyFilter();
        },
      },
      {
        name: "Négatif",
        previewFilter: new ImageFilter(this.imageFilter).toggleInvert(),
        action: () => {
          this.imageFilter.toggleInvert();
          this.onApplyFilter();
        },
      },
      {
        name: "Sépia",
        previewFilter: new ImageFilter(this.imageFilter).toggleSepia(),
        action: () => {
          this.imageFilter.toggleSepia();
          this.onApplyFilter();
        },
      },
    ];
  }
}
