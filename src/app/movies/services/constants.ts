import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export const MOVIE_ID = 'movie_id';
export const PAGE = 'page';
export const LIMIT = 'limit';
export const WITH_IMAGES = 'with_images';
export const WITH_CAST = 'with_cast';
export const TRUE = 'true';
export const FALSE = 'false';

export const loadImage = (imagePath) => {
  return Observable.create(
    (observer: Subscriber<any>) => {
      var img = new Image();
      img.src = imagePath;
      img.onload = () => {
        observer.next(img);
        observer.complete();
      }
      img.onerror = (err) => {
        //observer.error(err);
        observer.next(img);   // just ignore
        observer.complete();
      } 
    }
  )
};
