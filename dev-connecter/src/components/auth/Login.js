import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    });

    const { email, password} = setformData;

    const onChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log('Success');
    }

    return (
        <div>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Log In Now</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Register Now? <Link to="login.html">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login;
