import { IListItems } from "interfaces/ListItems";
import { IListItem } from "interfaces/ListItem";

export async function fetchListItems(
  page: number,
  limit: number
): Promise<IListItems> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();

    const getImageSize = async (url: string) => {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const imageResponse = await fetch(proxyUrl + url);

        const blob = await imageResponse.blob();
        const sizeInMB = blob.size / (1024 * 1024);
        return sizeInMB;
      } catch (error) {
        return 0;
      }
    };

    const itemsWithSize: IListItems = {};

    await Promise.all(
      data.map(async (item: IListItem) => {
        const sizeInMB = await getImageSize(item.thumbnailUrl);
        itemsWithSize[item.id] = {
          id: item.id,
          title: item.title,
          thumbnailUrl: item.thumbnailUrl,
          isFavorite: false,
          size: sizeInMB
        };
      })
    );

    return itemsWithSize;
  } catch (error) {
    console.error("Error fetching list items:", error);
    throw error;
  }
}
