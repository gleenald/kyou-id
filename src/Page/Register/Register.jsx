import "./css/Register.css";

function Register() {
  return (
    <div className="container border">
      {/* TITLE GROUP */}
      <div className="row">
        <div data-testid="title-container" className="col-sm-12 col-md-12 col-lg-12">
          Title
        </div>
      </div>

      {/* REGISTER FORM GROUP */}
      <div className="row">
        <div data-testid="register-form-container" className="col-sm-12 col-md-12 col-lg-12">
          Register Form
        </div>
      </div>
    </div>
  );
}

export default Register;
