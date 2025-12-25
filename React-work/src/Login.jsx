import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
  const navigate = useNavigate()
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(name, password, remember)
        alert("Login Successful");

        if (name.trim() === "") {
            alert("Username is required");
            return;
        }


        if (password.trim() === "") {
            alert("Password is required");
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("signupData"));

  if (!savedUser) {
    alert("No user found, please signup first");
    return;
  }

  if (
    name === savedUser.username &&
    password === savedUser.password
  ) {
    alert("Login Successful ");
    navigate("/Gallery");
  } else {
    alert("Invalid Username or Password ");
  }


    }
    return (
        <motion.div
            initial={{ backgroundPosition: "50% 60%" }}
            animate={{ backgroundPosition: "50% 40%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className=" min-h-screen bg-[url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center flex  flex-col justify-center items-center ">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl w-[90%] sm:w-96 bg-white/30 p-2 sm:p-0">
                <h1 className=" text-2xl font-bold text-center mb-6 mt-5">Login</h1>
                <div className="flex flex-col mx-5 my-6 sm:m-10">
                    <div className="relative">
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Username"
                            className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <FaUserAlt className="absolute  mt-1 right-3 top-1/2 transform -translate-y-1/2 text-black-400" />
                    </div>

                    <div className="relative">
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <RiLockPasswordFill className="absolute mt-1.5 right-3 top-1/2 transform -translate-y-1/2 text-black-400" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mx-5 sm:m-10">
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)} ></input>
                        <label htmlFor="remember" >Remember me</label>
                    </div>
                    <label>Forget Password?</label>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleSumbit} className="w-[90%] sm:w-auto flex justify-center items-center bg-blue-700 active:scale-95  py-2 rounded-lg px-7">Login</button>
                </div>   <p className="flex  justify-center items-center my-4 "> Don't have an account?
                    <button  onClick={() => navigate("/signup")}className="ml-1 text-black-700 underline">Signup</button>
                </p>
            </motion.div>
        </motion.div>
    )
}
export default Login;