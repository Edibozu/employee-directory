import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <br />
        <br />
        <Table/>
      </div>
    );
  }
}

export default App;
