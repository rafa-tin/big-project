import { Link, useNavigate } from "react-router-dom";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";
import AppForm from "../UI/AppForm/AppForm";
import { useState } from "react";
import axios from "axios";

// const tailwindStyles = {
//   form_container:
//     "flex justify-center items-center min-h-screen dark:bg-gray-900 text-white",
//   form: "flex flex-col justify-center gap-4 items-center w-[400px] h-[400px] dark:bg-gray-800 bg-white p-8 rounded-2xl border-1 dark:border-blue-500",
//   form__inputs_container: "flex flex-col gap-4 w-full",
//   form__button: "w-2/3 mb-10",
// };

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    axios.post("http://localhost:5000/auth/login", {
     email: email, 
     password: password 
    })
    .then(response => {
      console.log("Login successful:", response.data);
      navigate("/");
    })
    .catch(error => {
      console.error("Login error:", error.response ? error.response.data : error.message);
    });
    // Здесь можно добавить логику отправки данных на сервер
  }

  return (
    <AppForm>
      <h1 className="xs:bg-red-500 mb-4 text-xl">LOGIN</h1>
      <div className="flex flex-col gap-4 w-full">
        <AppInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AppInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <AppButton className="w-2/3 mb-10" onClick={handleSubmit}>Login</AppButton>
      <div className="flex gap-1">
        <p className="text-[12px]">Don't have an account? </p>
        <Link className="text-green-600" to={"/register"}>
          <h2 className="text-[12px] font-bold">Sign Up</h2>
        </Link>
      </div>
    </AppForm>
  );
}
