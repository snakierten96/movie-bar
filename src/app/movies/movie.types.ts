
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
  summary?: string,
  description_full?: string,
  synopsis?: string,
  yt_trailer_code?: string,
  language?: string,
  mpa_rating?: string,
  backround_image?: string,
  backround_image_original?: string,
  small_cover_image?: string,
  large_cover_image?: string,
  state: string,
  torrents?: ITorrent[],
  date_uploaded: string,
  date_uploaded_unix: number
}

export interface IMovieResponse {
  movie_count?: number,
  limit?: number,
  page_number?: number,
  movies?: IMovie[]
}
