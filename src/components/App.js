import React from 'react';

const App = () => {
  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <button id="add-row">Add a row</button>
        <select>
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
      <table></table>
    </div>
  );
};

export default App;
