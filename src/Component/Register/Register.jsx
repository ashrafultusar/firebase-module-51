import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase.config";

const Register = () => {
  const [registationError, setRegistationError] = useState("");
  const [success, setSussess] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // password length check
    if (password.length < 6) {
      setRegistationError("Password should be at-list 6 carecter")
      return;
    }



    // reset error
    setRegistationError("");
    setSussess('');
    // creat user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSussess("user created successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegistationError(error.message);
      });
  };

  return (
    <div>
      <h3 className="text-3xl font-bold">Please register hear</h3>

      <div className=" flex justify-center items-center border md:w-1/2 mx-auto ">
        <form onSubmit={handelRegister}>
          <input
            className="mb-4 mt-4 w-3/4 px-4 py-2"
            type="email"
            name="email"
            placeholder="enter your email" required
          ></input>
          <br />
          <input
            className="w-3/4 px-4 py-2 mb-4"
            type="password"
            name="password"
            placeholder="enter your password" required
          ></input>
          <br />
          <input
            className="w-3/4 btn btn-sm mb-4"
            type="submit"
            name="Register"
          ></input>

          {
            registationError && 
            <p className="text-red-700">{registationError}</p>
          }
          {
            success && <p className="text-green-700">{ success}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default Register;
