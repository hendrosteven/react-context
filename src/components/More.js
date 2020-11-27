import React, { useContext } from 'react';
import { RootContext } from './App';

const More = () => {
    const { state, handlCounterMinus } = useContext(RootContext);
    return (
        <div>
            More: {state.counter}
            <button onClick={handlCounterMinus}> - </button>
        </div>
    );
}

export default More;