    import React from 'react';
    import './CreatePassword.css';

    export default function CreatePassword() {
    return (
        <div className="createrPassword">
        <div className="create-password-container">
        <h2>Create password</h2>
        <p className="instruction">
            Use a minimum of 10 characters, including letters, lowercase letters, and numbers.
        </p>

        <form className="create-password-form">
            <label htmlFor="password">Password</label>
            <div className="password-container">
            <input type="password" id="password" name="password" required />
            <i className="fa-regular fa-eye password-icon"></i>
            </div>

            <label htmlFor="confirm-password">Confirm password</label>
            <div className="password-container">
            <input type="password" id="confirm-password" name="confirm-password" required />
            <i className="fa-regular fa-eye password-icon"></i>
            </div>

            <button type="submit" className="btn-primary">Create account</button>
        </form>

        <p className="terms">
            By creating an account, you agree with our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Statement</a>.
        </p>
        </div>
        </div>
    );
    }
