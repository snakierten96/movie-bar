import { Observable } from 'rxjs/Observable';

export interface ITorrent {
  url: string,
  hash: string,
  quality: string,
  seeds: number,
  peers: number,
  size: string,
  size_bytes: number,
  date_uploaded: string,
  date_uploaded_unix: number
}

export interface ICast {
  name: string,
  character_name: string,
  url_small_image: string,
  imdb_code: string
}

export interface IMovie {
  id: number,
  url: string,
  imdb_code?: string,
  title: string,
  title_english?: string,
  title_long?: string,
  slug: string,
  year?: number,
  rating?: number,
  runtime?: number,
  genres?: string[],
  download_count?: number,
  like_count?: number,
  summary?: string,
  description_intro?: string,
  description_full?: string,
  synopsis?: string,
  yt_trailer_code?: string,
  language?: string,
  mpa_rating?: string,
  backround_image?: string,
  backround_image_original?: string,
  small_cover_image?: string,
  large_cover_image?: string,
  medium_screenshot_image1?: string,
  medium_screenshot_image2?: string,
  medium_screenshot_image3?: string,
  large_screenshot_image1?: string,
  large_screenshot_image2?: string,
  large_screenshot_image3?: string,
  state?: string,
  cast?: ICast[],
  suggestions?: Observable<IMovie>,
  torrents?: ITorrent[],
  date_uploaded: string,
  date_uploaded_unix: number
}

export interface IMoviesResponse {
  movie_count?: number,
  limit?: number,
  page_number?: number,
  movies?: IMovie[]
}
