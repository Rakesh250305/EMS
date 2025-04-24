import  { useContext, useEffect, useState} from 'react'

import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"; 
import { AuthContext } from './context/AuthProvider';

export default function App() {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  
  useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      console.log(loggedInUser);
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setuser(userData.role);
        setloggedInUserData(userData.data);
      }
    },[]);
  

  const handleLogin = (email, password)=>{
    if (email =='admin@me.com' && password == 123){
      setuser('admin');
      setloggedInUserData('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}));
    }
    else if (userData){
      const employee = userData.find(e => e.email === email && e.password == password);
      if(employee){
        setuser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}));
      }
    }
    else{
      alert("Invalid email or password");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setuser} data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData}/> : null)}
    </>
  )
}
