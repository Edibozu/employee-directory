import React, { Component } from 'react';

class Table extends Component {

        // handleSort function to take in the on Change function
        handleSort = () => {
            console.log("clicked handle sort");
            // let sortedData
            // google how to sort an array
            let sortedData = this.state.data.sort((a, b) => {
                return a.name.first < b.name.first ? -1 : 1;
            });
            console.log(sortedData);
            this.setState({
                filterData: sortedData,
            });
        }
    

    render() {
        console.log(this.props)
        return (
            <table className="table table-striped" data={this.props.data}>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col"onClick={this.handleSort}>Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee) => (
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
        );
    }
}

export default Table;