import React from "react";
import PropTypes from "prop-types";
import grid from "./table.module.css";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import { useTableSort } from "./useTableSort";

const Table = props => {
    const { tableData, columnDefinition, tableDescription } = props;

    const [setSorted, data] = useTableSort(tableData);
    const tableProps = {
        role: "table",
        "aria-label": tableDescription,
        "aria-rowcount": tableData.length,
        "data-testid": "data-table"
    };

    return (
        <table className={grid["container"]} {...tableProps}>
            <caption>{tableDescription}</caption>
                <TableHeader
                    headerData={columnDefinition}
                    sortData={setSorted}
                />
            <tbody>
                {data.map((rowData, index) => {
                    return (
                        <TableRow
                            rowData={rowData}
                            key={index}
                            colDefinition={columnDefinition}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    tableData: [],
    columnDefinition: [],
    tableDescription: "",
};

Table.propTypes = {
    tableData: PropTypes.array,
    columnDefinition: PropTypes.array,
    tablesDescription: PropTypes.string,
};

export default Table;
