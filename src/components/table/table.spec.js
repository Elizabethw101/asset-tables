/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Table from "./table";
import { getPricing } from "../../api/pricing";
import {mockDataDefinition} from './mockDataDefinition';

describe("it tests the table component", () => {
  let container = null;
  const pricing = getPricing();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  it("loads and renders the table", () => {
    container = renderer.create(
      <Table tableData={pricing} columnDefinition={mockDataDefinition} />
    );
    expect(container.toJSON()).toMatchSnapshot();
  });

  it("it expects has the right props", () => {
    container = mount(
      <Table tableData={pricing} columnDefinition={mockDataDefinition} />
    );
    expect(container.props().columnDefinition).toEqual(mockDataDefinition);
    expect(container.props().tableData).toEqual(pricing);
  });

  it("it expects table rows to match the data length plus the header", () => {
    container = mount(
      <Table tableData={pricing} columnDefinition={mockDataDefinition} />
    );
    expect(container.props().columnDefinition).toEqual(mockDataDefinition);
    expect(container.props().tableData).toEqual(pricing);

    const table = container.find('table');
    const rows = table.find('tr');
    expect(rows).toHaveLength(pricing.length +1);
  });

  it("it expects table to have three columns", () => {
    container = mount(
      <Table tableData={pricing} columnDefinition={mockDataDefinition} />
    );
    const table = container.find('table');
    const columns = table.find('th');
    expect(columns).toHaveLength(mockDataDefinition.length);
  });

  it("it expects the first header Labels text to be correct", () => {
    container = mount(
      <Table tableData={pricing} columnDefinition={mockDataDefinition} />
    );
    const table = container.find('table');
    const firstHeader = table.find('th').first();
    expect(firstHeader.text()).toBe('Ticker');
  });

});


