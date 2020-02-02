import React, { useState } from 'react'
import PropTypes from 'prop-types'
import grid from './table.module.css'
import classNames from 'classnames'

const TableHeader = props => {
    const [sortedColumn, setSortedColumn] = useState();
    const { headerData, sortData} = props

    const setSorted = (column, index) => {
        if (index === sortedColumn) {
            setSortedColumn()
            sortData();
        } else {
            setSortedColumn(index)
            sortData(column)
        }
    }

    return (<thead><tr className={grid['header']}>
        {headerData.map((column, i) => (
            <th className={classNames(grid['hcell'], sortedColumn === i && grid['sort'])} key={i}
                onClick={() => setSorted(column, i)}>{column.label}</th>
        ))}</tr>
    </thead>
    )
}

TableHeader.defaultProps = {
    headerData: [],
    sortData: () => undefined,
}

TableHeader.propTypes = {
    headerData: PropTypes.array,
    sortData: PropTypes.func,
}

export default TableHeader