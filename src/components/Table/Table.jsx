import React from 'react';
import "./Table.css";

const Table = (props) => {
    console.log(props)

    return (
        <div className="container">
            <div className="table">
                <table id="table" className="table table-striped">
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
                        {props.employeeData.map((employee) => (
                            <tr>
                                <td><img src={employee.picture.medium} alt="" /></td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.age}</td>
                            </tr>))};
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;