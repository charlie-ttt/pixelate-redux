import React from 'react';
import store, { addRow, pickColor, colorize } from '../store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log(this.state);
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={() => store.dispatch(addRow())}>
            Add a row
          </button>
          <select
            onChange={event => store.dispatch(pickColor(event.target.value))}
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table>
          <tbody>
            {this.state.grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((color, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={color}
                    onClick={() =>
                      store.dispatch(colorize(rowIndex, cellIndex))
                    }
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
