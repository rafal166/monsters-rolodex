import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";

import SearchBox from "./components/SearchBox/SearchBox.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //
      .then((response) => response.json())
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
