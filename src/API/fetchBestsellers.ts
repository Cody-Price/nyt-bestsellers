import { Url } from 'url';
import apiKey from '../apiKey'

export interface BestSellerApiResult {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: Url;
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

export interface BuyLink {
  name: string;
  url: Url;
}

// export async function fetchListNames(): Promise<any> {
//   const date: string = 'current';
//   const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`
//   try {
//     let response = await fetch(url);
//     let jsonResponse: ListResponse = await response.json();
//     const filteredResponse: ListResult[] = jsonResponse.results.filter((result: ListResult) => result.updated === UpdatedEnum.WEEKLY);
//     const encodedListNames: string[] = await filteredResponse.map((result: ListResult) => result.list_name_encoded);
//     console.log('encodedListNames:', encodedListNames);
//     return await encodedListNames;
//   } catch(err) {
//     console.error('fetchListNames err:', err);
//   }
// }

const urlStartConstant: string = 'https://api.nytimes.com/svc/books/v3/lists';

export async function fetchBestsellers(list: string, date: string = 'current'): Promise<any> {
  const url = `${urlStartConstant}/${date}/${list}.json?api-key=${apiKey}`
  try {
    let response = await fetch(url);
    let jsonResponse: any = await response.json();
    return await jsonResponse.results;
  } catch(err) {
    console.error('fetchBestsellers err:', err);
  }
}

export async function fetchOverview() {
  const url = `${urlStartConstant}/overview.json?api-key=${apiKey}`
  try {
    let response = await fetch(url);
    let jsonReponse = await response.json();
    return await jsonReponse;
  } catch(err) {
    console.error('fetchOverview err:', err);
  }
}

export async function getBestSellers() {
  try {
    const overviewResponse = await fetchOverview();
    const bestSellers = extractBestSellers(overviewResponse);
    return bestSellers;
  } catch(err) {
    console.error('getBestSellers err:', err);
  }
}

export function extractBestSellers(overviewResponse: any) {
  const resultsArray: any = [];
  overviewResponse.results?.lists?.forEach((item: any) => {
    item.books.forEach((book: any) => {
      resultsArray.push(book);
    })
  });
  return resultsArray;
}