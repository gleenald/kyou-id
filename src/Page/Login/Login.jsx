import "./css/Login.css";

function Login() {
  return (
    <div className="container-fluid border">
      <div className="row">
        {/* LOGIN GROUP */}
        <div data-testid="login-container" className="col-sm-12 col-md-12 col-lg-7">
          Login
        </div>

        {/* REGISTER GROUP */}
        <div data-testid="register-container" className="col-sm-12 col-md-12 col-lg-5">
          Register
        </div>
      </div>
    </div>
  );
}

export default Login;
