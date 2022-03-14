import React, { Component } from "react";
import styles from "/components/table.module.css";
import fetch from "isomorphic-unfetch";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ["", ""],
    };
  }

  getDatas = async () => {
    const res = await fetch("http://localhost:3000/api/player");
    const { data } = await res.json();
    this.setState({ players: data });
  };

  render() {
    this.getDatas();
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="3" className={styles.tablehead}>
              Legends
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.hrow}>
            <td className={styles.cell}>Name</td>
            <td className={styles.cell} onClick={this.getDatas}>
              Score
            </td>
            <td className={styles.cell}>Rank</td>
          </tr>
          {this.state.players.map((player) => {
            return (
              <tr className={styles.row} key={player.id}>
                <td className={styles.cell}>{player.name}</td>
                <td className={styles.cell}>{player.score}</td>
                <td className={styles.cell}>1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
