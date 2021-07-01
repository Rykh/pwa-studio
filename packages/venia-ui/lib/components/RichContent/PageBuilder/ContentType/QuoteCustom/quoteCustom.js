import React from 'react';
import { mergeClasses } from '../../../../../classify';
import defaultClasses from './quoteCustom.css';
import { shape, string } from 'prop-types';

// Component for testing setup
const QuoteCustom = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.testClass}>
            <div>Content Type: {props.contentType}</div>
            <div>Appearance: {props.appearance}</div>
        </div>
    );
};

QuoteCustom.propTypes = {
    classes: shape({
        testClass: string
    }),
    contentType: string,
    appearance: string
}

export default QuoteCustom;
