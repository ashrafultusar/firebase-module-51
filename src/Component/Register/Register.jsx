import React from "react";

const Register = () => {

    const handelRegister = e => {
        e.preventDefault();
const email=e.target.email.value
const password=e.target.password.value
console.log(email,password)
}

  return (
    <div>
      <h3 className="text-3xl">Please register hear</h3>

      <div className=" flex justify-center items-center border md:w-1/2 mx-auto ">
        <form onSubmit={handelRegister}>
          <input
            className="mb-4 mt-4 w-3/4 px-4 py-2"
            type="email"
            name="email"
            
            placeholder="enter your email"
          ></input>
          <br />
          <input
            className="w-3/4 px-4 py-2 mb-4"
            type="password"
            name="password"
            
            placeholder="enter your password"
          ></input>
          <br />
          <input
            className="w-3/4 btn btn-sm mb-4"
            type="submit"
            name="Register"
            
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Register;
