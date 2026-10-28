import { useReducer } from 'react';


const initialState = {
    countA: 0,
    countB: 0
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_A':
            return { ...state, countA: state.countA + 1 };
        case 'DECREMENT_A':
            return { ...state, countA: state.countA > 0 ? state.countA - 1 : 0 };
        case 'INCREMENT_B':
            return { ...state, countB: state.countB + 1 };
        case 'DECREMENT_B':
            return { ...state, countB: state.countB > 0 ? state.countB - 1 : 0 };
        case 'RESET_ALL':
            return initialState;
        default:
            return state;
    }
};

function DoubleCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Double Counter</h2>

          
            <div style={{ marginBottom: '20px' }}>
                <h3>Counter A: {state.countA}</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={() => dispatch({ type: 'DECREMENT_A' })}
                        disabled={state.countA === 0}
                        style={{ padding: '6px 12px', cursor: state.countA === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        - A
                    </button>
                    <button 
                        onClick={() => dispatch({ type: 'INCREMENT_A' })}
                        style={{ padding: '6px 12px', cursor: 'pointer' }}
                    >
                        + A
                    </button>
                </div>
            </div>

           
            <div style={{ marginBottom: '20px' }}>
                <h3>Counter B: {state.countB}</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={() => dispatch({ type: 'DECREMENT_B' })}
                        disabled={state.countB === 0}
                        style={{ padding: '6px 12px', cursor: state.countB === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        - B
                    </button>
                    <button 
                        onClick={() => dispatch({ type: 'INCREMENT_B' })}
                        style={{ padding: '6px 12px', cursor: 'pointer' }}
                    >
                        + B
                    </button>
                </div>
            </div>

           
            <button 
                onClick={() => dispatch({ type: 'RESET_ALL' })}
                style={{  }}
            >
                Reset Both
            </button>
        </div>
    );
}

export default DoubleCounter;