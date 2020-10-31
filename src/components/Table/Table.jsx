import React from 'react';

const Table = (props) => {
    console.log(props)
    return (
        <div>

            <div>
                <div className="table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.employeeData.map((employee) => (
                                <tr>
                                    <td><img src={employee.picture.large} alt=""/></td>
                                    <td>{employee.name.first} {employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dob.date}</td>
                            </tr>))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;