import React, { createContext } from 'react';
import Other from './Other';

export const RootContext = createContext();

class App extends React.Component {
    state = {
        counter: 10
    }

    handlCounterPlus = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handlCounterMinus = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <RootContext.Provider value={{
                state: this.state,
                handlCounterMinus : this.handlCounterMinus
            }}>
                <div>
                    App: {this.state.counter}
                    <button onClick={this.handlCounterPlus}> + </button>
                    <button onClick={this.handlCounterMinus}> - </button>
                    <Other/>
                </div>
            </RootContext.Provider>
        );
    }
}

export default App;