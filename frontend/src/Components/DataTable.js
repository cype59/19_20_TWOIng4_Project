import React, { Component } from 'react';
import "./DataTable.css";


class DataTable extends Component {
    render() {
        const {obj} = this.props;
        if (!obj) return null;

        return (
            <tr>
                <td>{obj._id}</td>
                <td>{obj.location}</td>
                <td>{obj.personsInHouse}</td>
                <td>{obj.houseSize}</td>
            </tr>
        );
    }
}

export default DataTable;