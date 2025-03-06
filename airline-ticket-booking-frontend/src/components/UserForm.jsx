// import { useState } from "react";
// import axios from "axios";

// const UserForm = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/users", user);
//       console.log("Response from backend:", response.data);
//     } catch (error) {
//       console.error("Error sending data to backend:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={user.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={user.email}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="age"
//         placeholder="Age"
//         value={user.age}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UserForm;
