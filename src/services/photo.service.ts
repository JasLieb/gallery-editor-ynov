import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../core/model/photo.model';


@Injectable()
export class PhotoService {

    private photosBehavior: BehaviorSubject<Photo[]>;

    get photos$(): Observable<Photo[]> {
        return this.photosBehavior.asObservable();
    }

    constructor(private storage: Storage) { 
        this.photosBehavior = new BehaviorSubject([]);
        this.loadSaved();
    }

    loadSaved() {
        this.storage.get('photos').then(
            (photos) => {
                console.log(photos);            
                this.photosBehavior.next(
                    photos || []
                );
            }, 
            (err) => {
                console.log("Photo load issue: " + err);
            }
        );
    }

    savePhoto(photo: Photo) {
        const newPhotos = [
            ...this.photosBehavior.value,
            photo
        ];
        console.log(photo.data);
        this.storage.set('photos', newPhotos);
        this.photosBehavior.next(newPhotos);
    }

}