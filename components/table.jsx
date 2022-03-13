import React, { Component } from "react";
import styles from "/components/table.module.css";

class Table extends Component {
  state = {};
  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">LeaderBoard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Score</td>
            <td>Rank</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
