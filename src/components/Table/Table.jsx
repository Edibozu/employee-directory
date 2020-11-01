import React, { Component } from 'react';
import "./Table.css"

class Table extends Component {

    // handleSort function to take in the on Change function
    handleSort = () => {
        var employeeArr = this.props.employees;
        employeeArr.sort((a, b) => {
            if (a.name.first < b.name.first) return -1;
            if (a.name.first > b.name.first) return 1;
            return 0;
            
        })

        this.setState({
            filterData: employeeArr
        });
    }


    render() {
        console.log(this.props)
        return (
            <table className="table table-striped" data={this.props.data}>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <button className="link"><th scope="col" onClick={this.handleSort}>Name</th></button>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee, idx) => (
                        <tr>
                            <th><img src={employee.picture.medium} alt="employee" key={idx}/></th>
                            <th>{employee.name.first} {employee.name.last}</th>
                            <th>{employee.phone}</th>
                            <th>{employee.email}</th>
                            <th>{employee.dob.age}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;