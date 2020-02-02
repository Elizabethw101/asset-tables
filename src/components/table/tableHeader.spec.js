/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import TableHeader from "./tableHeader";
import { mockDataDefinition } from "./mockDataDefinition";
import { act } from "react-dom/test-utils";

describe("it tests the table header component", () => {
  let container = null;
  let resetData = jest.fn();
  let sortTableData = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  it("loads and renders the table header", () => {
    container = renderer.create(
      <TableHeader
        resetData={resetData}
        headerData={mockDataDefinition}
        sortData={sortTableData}
      />
    );
    expect(container.toJSON()).toMatchSnapshot();
  });

  it("should have default props", () => {
    expect(TableHeader.defaultProps.sortData).toBeDefined();
  });

  it("it expects the sort function to be called on clicking Ticker", () => {
    const container = shallow(
      <TableHeader
        resetData={resetData}
        headerData={mockDataDefinition}
        sortData={sortTableData}
      />
    );

    const firstHeader = container.find("th").first();
    firstHeader.simulate("click");
    expect(sortTableData).toHaveBeenCalledTimes(1);
  });

  it("it expects the reset sort to be called on two clicks", () => {
    const container = mount(
      <table>
        <TableHeader
          headerData={mockDataDefinition}
          sortData={sortTableData}
        />
      </table>
    );
    const firstHeader = container.find("th").first();
    firstHeader.simulate("click");
    expect(firstHeader.getDOMNode()).toHaveClass('sort')
    firstHeader.simulate("click");
    expect(firstHeader.getDOMNode()).not.toHaveClass('sort')
    expect(sortTableData).toHaveBeenCalled();
  });
});
