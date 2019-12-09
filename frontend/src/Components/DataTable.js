import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        const {obj} = this.props;
        console.log("objgefyzlguf",obj);
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