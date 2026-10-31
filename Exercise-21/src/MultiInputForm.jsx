import { useState } from 'react';

export default function MultiInputForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Developer',
        subscribe: false
    });

    
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100 font-sans">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Multi-Input Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter username" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        required
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        required
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        required
                    />
                </div>

                {/* Select Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select 
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white"
                    >
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        name="subscribe"
                        id="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="subscribe" className="text-sm text-gray-700">Subscribe to newsletter</label>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200 text-sm"
                >
                    Submit Form
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">Submitted Data:</h3>
                    <p className="text-xs text-gray-600"><strong>Username:</strong> {submittedData.username}</p>
                    <p className="text-xs text-gray-600"><strong>Email:</strong> {submittedData.email}</p>
                    <p className="text-xs text-gray-600"><strong>Password:</strong> {submittedData.password}</p>
                    <p className="text-xs text-gray-600"><strong>Role:</strong> {submittedData.role}</p>
                    <p className="text-xs text-gray-600"><strong>Subscribe:</strong> {submittedData.subscribe ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}