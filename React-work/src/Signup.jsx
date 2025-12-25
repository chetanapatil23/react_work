import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formdata.password !== formdata.confirmPassword) {
      alert("Password does not match");
      return;
    }


    localStorage.setItem("signupData", JSON.stringify(formdata));
    const data = JSON.parse(localStorage.getItem("signupData"));
    console.log(data)
    alert("Signup data stored in localStorage");


    setformdata({
      username: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
    });

    console.log(formdata)

  };


  return (
    <motion.div
      initial={{ backgroundPosition: "50% 60%" }}
      animate={{ backgroundPosition: "50% 40%" }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className=" min-h-screen bg-[url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center flex  flex-col justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl min-h-[420px] w-[90%] sm:w-96 bg-white/30 p-2 sm:p-0">
          <h1 className=" text-2xl font-bold text-center pt-5">Signup</h1>
          <div className="flex flex-col mx-5 sm:m-10">
            <input type="text" placeholder="username"
              className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formdata.username}
              name="username"
              onChange={handleChange}
              required />
            <input type="text" placeholder="email"
              className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formdata.email}
              name="email"
              onChange={handleChange}
              required />
            <input type="date"
              className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formdata.dob}
              name="dob"
              onChange={handleChange}
              required />
            <input type="password" placeholder="password"
              className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formdata.password}
              name="password"
              onChange={handleChange}
              required />
            <input type="password" placeholder="confirm password"
              className=" w-full mt-2.5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formdata.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              required />
            <button className=" w-full mt-2.5 px-4 py-2 rounded sm:w-auto flex justify-center items-center bg-blue-700 active:scale-95">Signup</button>
            <p className="flex  justify-center items-center my-4 "> Don't have an account?
              <button onClick={() => navigate("/Login")} className="ml-1 text-black-700 underline">Login</button>
            </p>

          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}
export default Signup;










