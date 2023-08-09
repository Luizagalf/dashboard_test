import { fetchListItems } from "services/api";
import { IListItems } from "interfaces/ListItems";

describe("fetchListItems", () => {
  it("should fetch a list of items with size information", async () => {
    const page = 1;
    const limit = 10;

    const listItems = await fetchListItems(page, limit);

    expect(Object.keys(listItems).length).toBe(limit);
    expect(
      Object.values(listItems).every(
        (item) => item.id && item.title && item.thumbnailUrl && item.size >= 0
      )
    ).toBe(true);
  });

  it("should handle API errors gracefully", async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockRejectedValue(new Error("API error"));

    const page = 1;
    const limit = 10;

    await expect(fetchListItems(page, limit)).rejects.toThrow("API error");

    global.fetch = originalFetch;
  });
});
