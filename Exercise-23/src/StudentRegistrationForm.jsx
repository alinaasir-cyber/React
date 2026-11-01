import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

export default function StudentRegistrationForm() {
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm({
        defaultValues: {
            studentName: '',
            email: '',
            gradeLevel: '',
            subjects: []
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    
    useEffect(() => {
        const savedData = localStorage.getItem('studentRegistration');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            reset(parsed);
        }
    }, [reset]);

    const onSubmit = (data) => {
        setIsLoading(true);

        
        setTimeout(() => {
            console.log('Form Data Submitted:', data);
            
            
            localStorage.setItem('studentRegistration', JSON.stringify(data));

            setIsLoading(false);
            setSuccessMessage('Student registered successfully!');

            
            alert(`Registration Successful!\n\nName: ${data.studentName}\nEmail: ${data.email}\nGrade: ${data.gradeLevel}\nSubjects: ${data.subjects.join(', ')}`);
        }, 1000);
    };

    return (
        <section className="registration-card">
            <h2 className="registration-title">Student Registration</h2>
            
            {successMessage && (
                <div className="registration-message" role="status">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                {/* Student Name */}
                <div className="form-field">
                    <label className="form-label">Student Name</label>
                    <input 
                        type="text" 
                        {...register("studentName", { required: "Student name is required" })}
                        className="form-control"
                        placeholder="Enter student name"
                    />
                    {errors.studentName && <p className="field-error">{errors.studentName.message}</p>}
                </div>

                {/* Email */}
                <div className="form-field">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="form-control"
                        placeholder="Enter email"
                    />
                    {errors.email && <p className="field-error">{errors.email.message}</p>}
                </div>

                {/* Grade Level */}
                <div className="form-field">
                    <label className="form-label">Grade Level</label>
                    <select 
                        {...register("gradeLevel", { required: "Please select a grade level" })}
                        className="form-control"
                    >
                        <option value="">Select Grade</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </select>
                    {errors.gradeLevel && <p className="field-error">{errors.gradeLevel.message}</p>}
                </div>

                {/* Subjects Checkboxes */}
                <div className="subjects-field">
                    <label className="form-label">Subjects Interest</label>
                    <div className="subject-options">
                        {['Mathematics', 'Science', 'English'].map((subject) => (
                            <label key={subject} className="subject-option">
                                <input 
                                    type="checkbox" 
                                    value={subject}
                                    {...register("subjects")}
                                />
                                {subject}
                            </label>
                        ))}
                    </div>
                </div>

               
                <div className="form-actions">
                   
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="register-button"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>

                    
                    <button 
                        type="button"
                        onClick={() => { reset(); setSuccessMessage(''); }}
                        className="reset-button"
                    >
                        Reset form
                    </button>
                </div>
            </form>
        </section>
    );
}