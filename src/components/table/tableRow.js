import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import grid from './table.module.css'

const TableRow = props => {
    const {
        rowData,
        colDefinition
    } = props

    const rowProps = {
        scope: 'row'
    }

    const getCurrencyType = (value) => {
        return value >= 0 ? 'positive' : 'negative'
    }

    return (
        <tr className={classNames(grid['cell'], grid[rowData.assetClass.toLowerCase()])} {...rowProps}>
            {colDefinition.map((column, index) => {
                return <td className={classNames(grid['cell'], column.dataType === 'currency' && grid[getCurrencyType(rowData[column.dataField])])} key={index}>{rowData[column.dataField]} </td>
            })}
        </tr>
    )
}

TableRow.defaultProps = {
    rowData: {},
    colDefinition: []
}

TableRow.propTypes = {
    rowData: PropTypes.object,
    colDefinition: PropTypes.array
}

export default TableRow