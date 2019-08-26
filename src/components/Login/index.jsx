import React from 'react';
import LoginForm from './LoginForm'
import '../../assests/css/home.css';

class Login extends React.Component {
    render() {
        return (
            <div className="page-content">
                <div className="container">
                    <div className="row row-lg-eq-height">
                        <div className="col-lg-9">
                            <div className="main-content">
                                <div className="blog-section">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;