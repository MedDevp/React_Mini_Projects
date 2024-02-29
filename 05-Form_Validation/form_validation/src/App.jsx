import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted successfully');
    } else {
      console.log('Form has errors');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded-md`}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded-md`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded-md`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded-md`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationExample;


// import React, { useState } from "react";

// const App = () => {
//   const [UserName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errorUserName , setErrorUserName] = useState("");
//   const [errorEmail , setErrorEmail] = useState("");
//   const [errorPassword , setErrorPassword] = useState("");

//   const [errorPasswordNum , setErrorPasswordNum] = useState("");
//   const [errorPasswordSC , setErrorPasswordSC] = useState("");

//   const [ColorUserName , setColorUserName] = useState("");
//   const [ColorEmail , setColorEmail] = useState("");
//   const [ColorPassword , setColorPassword] = useState("");

//   const [ColorPasswordNum , setColorPasswordNum] = useState("");
//   const [ColorPasswordSC , setColorPasswordSC] = useState("");


//   const Validate = (e) =>{
//     e.preventDefault();

//     if(UserName.length < 8){
//       setErrorUserName("Username must be 8 letters long.");
//       setColorUserName('red');
//     }else{
//       setErrorUserName("Correc!");
//       setColorUserName('green');
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(emailRegex.test(email) && email.includes('@gmail')){
//       setErrorEmail("Correc!");
//       setColorEmail('green');
//     }else{
//       setErrorEmail("Invalid Email");
//       setColorEmail('red');
//     }

//     if(password.length >=8){
//       setErrorPassword("");
//       setColorPassword('green');
//     }else{
//       setErrorPassword("Password must be 8 letters long.");
//       setColorPassword('red');
//     }
//     const numbers = /\d/;

//     if(numbers.test(password)){
//       setErrorPasswordNum("");
//       setColorPasswordNum('green');
//     }else{
//       setErrorPasswordNum("Password must has a number.");
//       setColorPasswordNum("red");
//     }
//     const specialCharacter = /[&()-_ç!@$~#{[|]}]/;

//     if(specialCharacter.test(password)){
//       setErrorPasswordSC("");
//       setColorPasswordSC('green');
//     }else{
//       setErrorPasswordSC("Password must has a special Character.");
//       setColorPasswordSC("red");
//     }


//   }

//   return (
//     <>
//       <div className="space-y-4 w-2/5 p-6 shadow-lg items-center bg-slate-50">
//         <div className="flex justify-between items-center">
//           <label htmlFor="">Username :</label>
//           <input 
//             type="text" 
//             placeholder="" 
//             className="border px-4 py-2"
//             value={UserName}
//             onChange={(e)=>{setUserName(e.target.value)}}  
//           />
//         </div>
//         <p className="text-sm text-right" style={{color :ColorUserName}}>{errorUserName}</p>
//         <div className="flex justify-between items-center">
//           <label htmlFor="">E-mail :</label>
//           <input 
//             type="text" 
//             placeholder="Ex:emple@gmail.com" 
//             className="border px-4 py-2"
//             value={email}
//             onChange={(e)=>{setEmail(e.target.value)}}  
//           />
//         </div>
//         <p className="text-sm text-right" style={{color :ColorEmail}}>{errorEmail}</p>
//         <div className="flex justify-between items-center">
//           <label htmlFor="">Password :</label>
//           <input 
//             type="password" 
//             placeholder="" 
//             className="border px-4 py-2"
//             value={password}
//             onChange={(e)=>{setPassword(e.target.value)}}  
//           />
//         </div>
//         <p className="text-sm pl-64" style={{color : ColorPassword}}>{errorPassword}</p>
//         <p className="text-sm pl-64" style={{color : ColorPasswordNum}}>{errorPasswordNum}</p>
//         <p className="text-sm pl-64" style={{color : ColorPasswordSC}}>{errorPasswordSC}</p>

//         <div>
//           <button 
//             className="border bg-cyan-400 text-white px-4 py-2 shadow-md "
//             onClick={Validate}
//             >Submit</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
