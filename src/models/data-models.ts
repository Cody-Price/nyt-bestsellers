export interface BestsellerApiResponse {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BuyLink[];
  contributor: string;
  contributor_note: string;
  created_date: Date;
  description: string;
  first_chapter_link: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: Date;
  weeks_on_list: number;
}

export interface OverviewApiResponse {
  copyright: string;
  num_results: number;
  status: string;
  results: OverviewResultsApiResponse;
}

export interface OverviewResultsApiResponse {
  bestsellers_date: string;
  next_published_date: string;
  previous_published_date: string;
  published_date: string;
  publihsed_date_description: string;
  lists: ListApiResponse[];
}

export interface ListApiResponse {
  books: BestsellerApiResponse[];
  display_name: string;
  list_id: number;
  list_image: string;
  list_image_height: number;
  list_image_width: number;
  list_name: string;
  list_name_encoded: string;
  updated: string;
}

export interface BuyLink {
  name: string;
  url: string;
}

export interface ExtractedOverviewData {
  bestseller_week: string;
  bestseller_list_name_contents: ListApiResponse[];
}

export interface BestsellerUiData {
  list_name: string;
  title: string;
  authors: string;
  description: string;
  publisher: string;
  current_rank: number;
  purchase_links: BuyLink[];
  book_image: string | null;
}