import React, { Component } from 'react';

class Table extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                <table className="table table-dark" data={this.props.data}>
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map((employee) => (
                            <tr>
                                <th><img src={employee.picture.medium} alt="employee" /></th>
                                <th>{employee.name.first} {employee.name.last}</th>
                                <th>{employee.phone}</th>
                                <th>{employee.email}</th>
                                <th>{employee.dob.age}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;