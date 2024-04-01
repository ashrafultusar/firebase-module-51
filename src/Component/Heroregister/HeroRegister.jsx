import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { Result } from "postcss";

const HeroRegister = () => {


  const heroLoginRegister = (e) => {
    e.preventDefault();
console.log('from submit vai')

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
    })
    


  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={heroLoginRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
