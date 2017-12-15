import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
        <div className="gamebox">
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
        </div>
    );
}
