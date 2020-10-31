import React from 'react';

const Table = (props) => {

    return (
        <div className="container">
            {/* <div className="table"> */}
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employeeData.map((employee, idx) => (
                            <tr key={idx}>
                                <td><img src={employee.picture.medium} alt="employee" /></td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.age}</td>
                        </tr>))};
                        </tbody>
                </table>
            </div>
        // </div>
    );
};

export default Table;