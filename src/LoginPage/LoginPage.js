import { Button } from 'react-bootstrap';
import '../styles/loginPage.css';

const LoginPage = () => {
    return (
        <div id="page-container">
            <h2>Login To Your Account</h2>
            <form>
                <div class="form-group row">
                    <label for="input-email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="input-email" placeholder="Email" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="input-password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="input-password" placeholder="Password" />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                        Login
                    </Button>
                </div>
            </form>

            <p>Don't have an account?</p>
            <Button variant="primary" size="sm">
                Sign Up Here!
            </Button>
        </div>
    );
}

export default LoginPage;