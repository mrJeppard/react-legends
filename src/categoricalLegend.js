/**
 * Created by duncan on 4/4/18.
 * Produces a legend for a categorical attribute.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DiscreteColorLegend from './discrete-color-legend'

import './legends.css';

CategoricalLegend.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    background: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

export default function CategoricalLegend(
    {title, categories, colors, height, width, background}
) {
    
    return <DiscreteColorLegend
        title={title}
        items={categories}
        colors={colors}
        height={height}
        width={width}
        background={background}
    />
    
}

