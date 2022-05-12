import { Button } from 'react-bootstrap';
import { useLinkClickHandler } from 'react-router-dom';

const LoginPage = () => {
    const redirectToSignup = useLinkClickHandler("/signup");
    return (
        <div id="page-container">
            <div id="main-container">
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
                        <Button variant="primary" size="sm" type ="submit" id="form-button">
                            Login
                        </Button>
                    </div>
                </form>

                <p>Don't have an account?</p>
                <Button variant="outline-primary" size="sm" id="signup-button" onClick={redirectToSignup}>
                    Sign Up Here!
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;