import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th colspan="2">LeaderBoard</th>
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
