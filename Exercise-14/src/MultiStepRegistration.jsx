import { useReducer } from 'react';


const initialState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isSubmitted: false
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            };
        case 'PREV_STEP':
            return {
                ...state,
                step: state.step - 1
            };
        case 'SUBMIT_FORM':
            return {
                ...state,
                isSubmitted: true
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

function MultiStepRegistration() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px' }}>
            <h2>Multi-Step Registration</h2>

            {state.isSubmitted ? (
                <div>
                    <h3 style={{ color: 'green' }}>Registration Successful!</h3>
                    <p>Thank you, {state.firstName} {state.lastName}.</p>
                    <button 
                        onClick={() => dispatch({ type: 'RESET_FORM' })}
                        style={{ padding: '6px 12px', cursor: 'pointer' }}
                    >
                        Register Another
                    </button>
                </div>
            ) : (
                <div>

                    {state.step === 1 && (
                        <div>
                            <h3>Step 1: Profile</h3>
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block' }}>First Name:</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    value={state.firstName} 
                                    onChange={handleChange}
                                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block' }}>Last Name:</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={state.lastName} 
                                    onChange={handleChange}
                                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                                />
                            </div>
                            <button 
                                onClick={() => dispatch({ type: 'NEXT_STEP' })}
                                style={{ padding: '6px 14px', cursor: 'pointer' }}
                            >
                                Next
                            </button>
                        </div>
                    )}

                   
                    {state.step === 2 && (
                        <div>
                            <h3>Step 2: Contact</h3>
                            <div style={{ marginBottom: '10px' }}>
                                <label style={{ display: 'block' }}>Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={state.email} 
                                    onChange={handleChange}
                                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block' }}>Phone:</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    value={state.phone} 
                                    onChange={handleChange}
                                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button 
                                    onClick={() => dispatch({ type: 'PREV_STEP' })}
                                    style={{ padding: '6px 14px', cursor: 'pointer' }}
                                >
                                    Back
                                </button>
                                <button 
                                    onClick={() => dispatch({ type: 'NEXT_STEP' })}
                                    style={{ padding: '6px 14px', cursor: 'pointer' }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                   
                    {state.step === 3 && (
                        <div>
                            <h3>Step 3: Review</h3>
                            <p><strong>First Name:</strong> {state.firstName}</p>
                            <p><strong>Last Name:</strong> {state.lastName}</p>
                            <p><strong>Email:</strong> {state.email}</p>
                            <p><strong>Phone:</strong> {state.phone}</p>
                            
                            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                <button 
                                    onClick={() => dispatch({ type: 'PREV_STEP' })}
                                    style={{ padding: '6px 14px', cursor: 'pointer' }}
                                >
                                    Back
                                </button>
                                <button 
                                    onClick={() => dispatch({ type: 'SUBMIT_FORM' })}
                                    style={{ padding: '6px 14px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MultiStepRegistration;