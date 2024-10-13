import React, { useState } from 'react';
import InputBox from '../components/input.component'; // Ensure this is the correct path

export default function UserAuthForm({ type }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Function to handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">
            {type === 'sign-in' ? 'Welcome Back' : 'Join Us Today'}
          </h1>

          {/* Only show Full Name field in the sign-up form */}
          {type !== 'sign-in' && (
            <InputBox
              label="Full Name"
              type="text"
              id="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          )}

          {/* Email input for both sign-in and sign-up */}
          <InputBox
            label="Email"
            type="email"
            id="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password input for both sign-in and sign-up */}
          <InputBox
            label="Password"
            type="password"
            id="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Confirm password field only for sign-up */}
          {type !== 'sign-in' && (
            <InputBox
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          {/* Conditional link for toggling between sign-in and sign-up */}
          <div className="mt-4 text-center">
            {type === 'sign-in' ? (
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-indigo-500 hover:underline">
                  Sign up
                </a>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/signin" className="text-indigo-500 hover:underline">
                  Log in
                </a>
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
