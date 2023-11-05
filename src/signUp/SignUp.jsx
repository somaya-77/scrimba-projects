import { useState } from 'react';
import './index.css';
export default function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        join: false
    })
    // console.log(formData)

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("passwords to not match")
            return
        }

        if(formData.join){
            console.log("Thanks for signingup for our newsletter!")
        }
    }
    function handleChange(e) {
        const { value, name, checked, type } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.join}
                        onChange={handleChange}
                        name="join"

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
