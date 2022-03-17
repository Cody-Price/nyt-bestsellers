import apiKey from '../apiKey'

export interface BestSellersResponse {
  copyright: string;
  num_results: number;
  results: BestSellerResult[];
  status: string;
}

export interface BestSellerResult {
  age_group: string;
  author: string;
  contributor_note: string;
  description: string;
  isbns: InternationalStandardBookNumber[];
  price: string;
  publisher: string;
  ranks_history: Rank[];
  reviews: Review[];
  title: string;
}

export interface InternationalStandardBookNumber {
  isbn10: string;
  isbn13: string;
}

export interface Rank {
  asterisk: number;
  bestsellers_date: string;
  dagger: number;
  display_name: string;
  list_name: string;
  primary_isbn10: string;
  primary_isbn13: string;
  published_date: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
}

export interface Review {
  article_chapter_link: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
}

export interface ListResponse {
  copyright: string;
  num_results: number;
  results: ListResult[];
  status: string;
}

export interface ListResult {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: UpdatedEnum;
}

export enum UpdatedEnum {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

export async function fetchListNames(): Promise<any> {
  const date: string = 'current';
  const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`
  try {
    let response = await fetch(url);
    let jsonResponse: ListResponse = await response.json();
    const filteredResponse: ListResult[] = jsonResponse.results.filter((result: ListResult) => result.updated === UpdatedEnum.WEEKLY);
    const encodedListNames: string[] = await filteredResponse.map((result: ListResult) => result.list_name_encoded);
    return await encodedListNames;
  } catch(err) {
    console.error(err);
  }
}

export async function fetchBestsellers(list: string, date: string = 'current'): Promise<any> {
  const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${apiKey}`
  try {
    let response = await fetch(url);
    let jsonResponse: BestSellersResponse = await response.json();
    return await jsonResponse.results;
  } catch(err) {
    console.error(err);
  }
}