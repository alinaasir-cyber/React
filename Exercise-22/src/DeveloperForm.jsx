import { useState } from 'react';

export default function DeveloperForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: '',
        experience: '',
        skills: [],
        agreeTerms: false,
        receiveNotifications: false
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (name === 'skills') {

                const updatedSkills = checked
                    ? [...formData.skills, value]
                    : formData.skills.filter(skill => skill !== value);
                setFormData({ ...formData, skills: updatedSkills });
            } else {

                setFormData({ ...formData, [name]: checked });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <section className="application-card">
            <h1 className="form-title">Developer Application Form</h1>

            <form onSubmit={handleSubmit} className="application-form">
                {/* Full Name */}
                <div className="form-field">
                    <label className="field-label" htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-field">
                    <label className="field-label" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                {/* Role Dropdown */}
                <div className="form-field">
                    <label className="field-label" htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                </div>

                {/* Years of Experience */}
                <div className="form-field">
                    <label className="field-label" htmlFor="experience">Years of Experience</label>
                    <input
                        id="experience"
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                {/* Skills Checkboxes Grid */}
                <fieldset className="skills-fieldset">
                    <legend className="field-label">Skills</legend>
                    <div className="skills-grid">
                        {['React', 'TypeScript', 'Python', 'UI Design', 'JavaScript', 'Node.js', 'Java', 'API Development'].map((skill) => (
                            <label key={skill} className="checkbox-option">
                                <input
                                    type="checkbox"
                                    name="skills"
                                    value={skill}
                                    checked={formData.skills.includes(skill)}
                                    onChange={handleChange}
                                />
                                {skill}
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Terms and Conditions */}
                <div className="consent-options">
                    <label className="checkbox-option">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        I agree to the terms and conditions
                    </label>

                    <label className="checkbox-option">
                        <input
                            type="checkbox"
                            name="receiveNotifications"
                            checked={formData.receiveNotifications}
                            onChange={handleChange}
                        />
                        Receive notifications about new opportunities
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="submit-button"
                >
                    Submit Application
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="application-summary">
                    <h2>Application Summary:</h2>
                    <p><strong>Full Name:</strong> {submittedData.fullName}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Role:</strong> {submittedData.role}</p>
                    <p><strong>Experience:</strong> {submittedData.experience} years</p>
                    <p><strong>Skills:</strong> {submittedData.skills.join(', ') || 'None'}</p>
                    <p><strong>Agree Terms:</strong> {submittedData.agreeTerms ? 'Yes' : 'No'}</p>
                    <p><strong>Notifications:</strong> {submittedData.receiveNotifications ? 'Yes' : 'No'}</p>
                </div>
            )}
        </section>
    );
}