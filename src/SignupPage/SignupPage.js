import { Button } from 'react-bootstrap';
import '../styles/signupPage.css';


const SignupPage = () => {
    return (
        <div id="page-container">
            <div id="main-container">
                <h2>Create an Account</h2>
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
                    <div class="form-group row">
                        <label for="input-password" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="input-password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="sm" type ="submit" id="login-button">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;