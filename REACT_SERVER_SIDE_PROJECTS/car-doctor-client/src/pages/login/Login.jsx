import { Link } from "react-router-dom";
import LogIn from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (email.trim() === "") {
      setError("Email field is empty!");
      return false;
    } else if (password.trim() === "") {
      setError("Password field is empty!");
      return false;
    }
    userLogin(email, password)
      .then((result) => {
        const loggedInUser = result.loggedInUser;
        setSuccess("User log in successful !!!");
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
        setError("Something went wrong !!!");
      });
    setError("");
    setSuccess("");
    form.reset();
  };

  const handleResetPassword = () => {
    alert("OJ");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 px-10">
          <img src={LogIn} alt="" className="object-cover w-full" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold ">Login</h1>
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    onClick={handleResetPassword}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password ?
                    <span className="text-indigo-500">Reset your password</span>
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to="/sign-up"
                    className="label-text-alt link link-hover"
                  >
                    New to this site ?
                    <span className="text-indigo-500"> Please Sign up</span>
                  </Link>
                </label>
              </div>
              <div className="">
                {error && (
                  <span className="text-red-500">
                    <i>
                      <small>{error}</small>
                    </i>
                  </span>
                )}
                {success && (
                  <span className="text-green-500">
                    <i>
                      <small> {success}</small>
                    </i>
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
