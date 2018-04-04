import React, { Component } from 'react';
import CategoricalLegend from './categoricalLegend'
import './legends.css';

const CATEGORIES=["apples","oranges","man made orangutans"];
const COLORS=["#FF1000", "#00FF10", "#1000FF"];
const TITLE="Attribute Name";
const LIGHT_BACKGROUND="white";
const DARK_BACKGROUND="black";

class App extends Component {
  render() {
    return (
      <div className="App">
          No sizing problems. Click for interactivity
        <CategoricalLegend
            width={250}
            height={125}
            categories={CATEGORIES}
            colors={COLORS}
            background={LIGHT_BACKGROUND}
            title={TITLE}
            onCategoryClick={(category)=>alert("you get some " + category)}
      />
          too short
          <CategoricalLegend
              width={250}
              height={100}
              categories={CATEGORIES}
              colors={COLORS}
              background={DARK_BACKGROUND}
              title={TITLE}
              onCategoryClick={(category)=>alert("you get some " + category)}
          />
          too skiny
          <CategoricalLegend
              width={100}
              height={150}
              categories={CATEGORIES}
              colors={COLORS}
              background={LIGHT_BACKGROUND}
              title={TITLE}
              onCategoryClick={(category)=>alert("you get some " + category)}
          />
      </div>
    );
  }
}

export default App;
