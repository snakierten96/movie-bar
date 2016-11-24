import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export const MOVIE_ID = 'movie_id';
export const PAGE = 'page';
export const LIMIT = 'limit';
export const WITH_IMAGES = 'with_images';
export const WITH_CAST = 'with_cast';
export const TRUE = 'true';
export const FALSE = 'false';

export const loadImage = (imagePath: string) => {
  return Observable.create(
    (observer: Subscriber<string | null>) => {
      var img = new Image();
      img.src = imagePath;
      img.onload = () => {
        observer.next(imagePath);
        observer.complete();
      }
      img.onerror = (err) => {
        observer.next(null);   // just ignore
        observer.complete();
      } 
    }
  )
};
