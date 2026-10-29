import { useForm } from './useForm';

function CustomHookForm() {
    
    const [values, handleChange, resetForm] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted Successfully!\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`);
        resetForm();
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <h2>Custom Hook</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={values.name} 
                        onChange={handleChange}
                        style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange}
                        style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                    <textarea 
                        name="message" 
                        value={values.message} 
                        onChange={handleChange}
                        style={{ padding: '6px', width: '100%', boxSizing: 'border-box', height: '80px' }}
                        required
                    />
                </div>

                <button type="submit" style={{ padding: '6px 14px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CustomHookForm;