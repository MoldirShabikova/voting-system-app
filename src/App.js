import "./styles.css";
import React from "react";
import { data } from "./components/data";

class App extends React.Component {
  constructor() {
    super();
    this.state = { teams: data };
  }

  handleClick(index) {
    const newState = [...this.state.teams];
    newState[index].votes += 1;
    this.setState({ teams: newState });
  }
  render() {
    const { teams } = this.state;
    console.log(teams);
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            {teams.map((team, index) => {
              return (
                <>
                  <div className="container_team">
                    <img
                      src={team.img}
                      alt={team.name}
                      className="container_img"
                    />
                    <h3>{team.name}</h3>
                    <button
                      className="btn"
                      onClick={() => this.handleClick(index)}
                    >
                      Vote
                    </button>
                    <h3>Vote Count {team.votes}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
//
