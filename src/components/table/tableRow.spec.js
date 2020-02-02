/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import TableRow from "./tableRow";
import { getPricing } from "../../api/pricing";
import {mockDataDefinition} from './mockDataDefinition';

describe("it tests the table row component", () => {
  let container = null;
  const pricing = getPricing();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  it("loads and renders the table row", () => {
    container = renderer.create(
        <TableRow
        rowData = {pricing[0]}
        key={1}
        colDefinition = {mockDataDefinition}
        /> 
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
