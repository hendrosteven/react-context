import React, { useContext } from 'react';
import More from './More';
import { RootContext } from './App';

const Other = () => {
    const { state } = useContext(RootContext);
    return (
        <div>
            <div>Other: {state.counter}</div>
            <More />
        </div>
    );
}

export default Other;