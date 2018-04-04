import React, { Component } from 'react';
import CategoricalLegend from './categoricalLegend'
import './legends.css';

const CATEGORIES=["apples","oranges","man made orangutan"];
const COLORS=["#FF1000", "#00FF10", "#1000FF"];
const TITLE="Attribute Name";
const LIGHT_BACKGROUND="white";
const DARK_BACKGROUND="black";

class App extends Component {
  render() {
    return (
      <div className="App">
          Normal without sizing problems
        <CategoricalLegend
            width={250}
            height={125}
            categories={CATEGORIES}
            colors={COLORS}
            background={LIGHT_BACKGROUND}
            title={TITLE}
      />
          too short
          <CategoricalLegend
              width={250}
              height={100}
              categories={CATEGORIES}
              colors={COLORS}
              background={DARK_BACKGROUND}
              title={TITLE}
          />
          too skiny
          <CategoricalLegend
              width={100}
              height={150}
              categories={CATEGORIES}
              colors={COLORS}
              background={LIGHT_BACKGROUND}
              title={TITLE}
          />
      </div>
    );
  }
}

export default App;
