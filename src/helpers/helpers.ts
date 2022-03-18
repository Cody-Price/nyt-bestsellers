import { fetchOverview } from "../api/fetchOverviewApi";
import { OverviewApiResponse, ExtractedOverviewData, BestsellerUiData, ListApiResponse, BestsellerApiResponse } from "../models/data-models";

export async function getOverviewData(): Promise<any> {
  try {
    let overviewResponse = await fetchOverview();
    if (overviewResponse) {
      overviewResponse = extractDataFromOverviewResponse(overviewResponse);
    }
    return overviewResponse;
  } catch(err) {
    return err;
  }
}

export function extractDataFromOverviewResponse(overviewResponse: OverviewApiResponse) {
  const extractedData: ExtractedOverviewData = {
    bestseller_week: overviewResponse.results?.bestsellers_date,
    bestseller_list_name_contents: [],
  };

  overviewResponse.results?.lists?.forEach((item: any) => {
    extractedData.bestseller_list_name_contents.push(item);
  });

  return extractedData;
}

export function extractBestsellersUiDataFromOverviewData(overviewData: ExtractedOverviewData): BestsellerUiData[] {
  const bestsellerUiData: BestsellerUiData[] = [];

  overviewData.bestseller_list_name_contents.forEach((listItem: ListApiResponse) => {
    let returnedBestsellerUiData: BestsellerUiData = {
      list_name: listItem.display_name,
      title: '',
      authors: '',
      description: '',
      publisher: '',
      current_rank: 0,
      purchase_links: [],
      book_image: null,
    };

    listItem.books?.forEach((bestseller: BestsellerApiResponse) => {
      returnedBestsellerUiData = {
        ...returnedBestsellerUiData,
        title: bestseller.title,
        authors: bestseller.author,
        description: bestseller.description,
        publisher: bestseller.publisher,
        current_rank: bestseller.rank,
        purchase_links: bestseller.buy_links,
        book_image: bestseller.book_image,
      }
      bestsellerUiData.push(returnedBestsellerUiData);
    });
  });

  return bestsellerUiData;
}

export function extractUniqueListNameUiDataFromOverviewData(overviewData: ExtractedOverviewData): string[] {
  const uniqueNameUiData: string[] = [];

  overviewData.bestseller_list_name_contents.map((entry: ListApiResponse) => entry.display_name).filter((name, index) => {
    if (!uniqueNameUiData.includes(name)) {
      uniqueNameUiData.push(name);
    };
  });

  return uniqueNameUiData;
}