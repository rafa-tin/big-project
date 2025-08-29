import { Link, useNavigate } from "react-router-dom";
import AppButton from "../UI/AppButton/AppButton";
import AppForm from "../UI/AppForm/AppForm";
import AppInput from "../UI/AppInput/AppInput";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted:", { mail, password });

    axios.post("http://localhost:5000/auth/register", {
      email: mail,
      password: password
    })
    .then(responce => {
      console.log("Registration successful:", responce.data);
      navigate("/login");
    }).catch(error => {
      console.error("Registration error:", error.response ? error.response.data : error.message);
    });
  }

  return (
    <AppForm>
      <h1 className="xs:bg-red-500 mb-4 text-xl">REGISTRATION</h1>
      <div className="flex flex-col gap-4 w-full">
        <AppInput
          type="text"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <AppInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <AppButton className="w-2/3 mb-10" onClick={handleSubmit}>Sign Up</AppButton>
      <div className="flex gap-1">
        <p className="text-[12px]">Have an account? </p>
        <Link className="text-green-600" to={"/login"}>
          <h2 className="text-[12px] font-bold">Log In</h2>
        </Link>
      </div>
    </AppForm>
  );
}
