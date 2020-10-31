import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import axios from "axios";

class App extends Component {
  state = {
    employees: "",
  };

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = () => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      this.setState({
        employees: response.data.results
      });
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Search />
        <br />
        <br />
        <Table employeeData={this.state.employees}/>
      </div>
    );
  }
}

export default App;
