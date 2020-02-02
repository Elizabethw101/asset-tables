import { useState} from 'react'

export const useTableSort = (data) => {
    const [tableData, setTableData] = useState(data);
    const setTableSort = (type) => {
        if (type) {
            type.dataType === 'asset' || type.dataType === 'currency' ? setTableData(data.slice().sort((value1, value2) => (value1[type.dataField] < value2[type.dataField]) ? 1 : -1)) :
                setTableData(data.slice().sort((value1, value2) => (value1[type.dataField] > value2[type.dataField]) ? 1 : -1));
        } else {
            setTableData(data)
        }
    }
    return [setTableSort, tableData]
}