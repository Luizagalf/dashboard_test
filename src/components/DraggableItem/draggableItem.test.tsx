import { render, screen, fireEvent } from "@testing-library/react";
import DraggableItem from "components/DraggableItem";
import { listItemTest } from "utils/testData";

describe("DraggableItem Component", () => {
  const dummyIndex = 0;
  const mockMoveItem = jest.fn();

  beforeEach(() => {
    mockMoveItem.mockClear();
  });

  it("renders the item correctly", () => {
    render(
      <DraggableItem
        item={listItemTest}
        index={dummyIndex}
        moveItem={mockMoveItem}
      />
    );

    const draggableItem = screen.getByTestId("draggableItem");
    expect(draggableItem).toBeInTheDocument();

    const listItem = screen.getByText("accusamus");
    expect(listItem).toBeInTheDocument();
  });

  it("applies dragging styles on drag start", () => {
    render(
      <DraggableItem
        item={listItemTest}
        index={dummyIndex}
        moveItem={mockMoveItem}
      />
    );

    const draggableItem = screen.getByTestId("draggableItem");
    fireEvent.dragStart(draggableItem, {
      dataTransfer: { setData: jest.fn() }
    });

    expect(draggableItem.className.includes("dragging")).toBe(true);
  });

  it("removes dragging styles on drag end", () => {
    render(
      <DraggableItem
        item={listItemTest}
        index={dummyIndex}
        moveItem={mockMoveItem}
      />
    );

    const draggableItem = screen.getByTestId("draggableItem");
    fireEvent.dragStart(draggableItem, {
      dataTransfer: { setData: jest.fn() }
    });
    fireEvent.dragEnd(draggableItem);

    expect(draggableItem.className.includes("dragging")).toBe(false);
  });

  it("calls moveItem when item is dropped", () => {
    render(
      <DraggableItem
        item={listItemTest}
        index={dummyIndex}
        moveItem={mockMoveItem}
      />
    );
    const dropTarget = screen.getByTestId("draggableItem");

    const dataTransferMock = {
      getData: jest.fn().mockReturnValue(dummyIndex.toString())
    };

    fireEvent.dragOver(dropTarget, {
      dataTransfer: dataTransferMock
    });
    fireEvent.drop(dropTarget, {
      dataTransfer: dataTransferMock
    });

    expect(mockMoveItem).toHaveBeenCalledWith(dummyIndex, dummyIndex);
  });
});
