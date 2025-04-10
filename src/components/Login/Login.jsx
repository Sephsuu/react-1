import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container login_bg d-flex justify-content-center align-items-center">
            <form className="login_form" action="">
                <div className="form_content">
                    <div className="d-flex justify-content-center mt-5">
                        <img className="papiverse_logo" src="/images/papiverse_logo.png" alt="Krispy Papi Logo" />
                    </div>
                    <h3 className="text-center my-3 fw-bold">Login</h3>
                    <input className="form-control" type="email" placeholder="Username" />
                    <input className="form-control" type="password" placeholder="Password" />
                    <div className="d-flex flex-column justify-content-center text-center">
                        <div className="d-flex justify-content-center">
                            <button onClick={ () => window.location.href = "https://sephsuu.github.io/react-1/dashboard/" } className="btn btn-black mt-2" type="button" to="/dashboard">Login</button>
                        </div>
                        <a className="my-4 btn" href="#">Forgot Password</a>
                        <a className="mb-4 btn" href="#">Reset Password</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;