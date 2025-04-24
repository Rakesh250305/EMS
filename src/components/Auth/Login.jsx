import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

  return (
    <div>
        <div className="flex h-screen w-screen justify-center items-center">
        <div className="border-2 p-20 rounded-xl border-emerald-600">
            <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col items-center justify-center text-white">
                <input className="text-xl text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full text-white placeholder:text-gray-400" 
                value={email} 
                onChange={(e)=>
                    setEmail(e.target.value)
                    }
                    type="email" placeholder="Enter your email" required/>

                <input className="text-xl text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 rounded-full text-white placeholder:text-gray-400 mt-3" 
                value={password} 
                onChange={(e)=>
                    setPassword(e.target.value)
                    } 
                    type="password" placeholder="Enter your Password" required/>
                
                <button className="text-xl w-[80%] text-white border-2 bg-emerald-600 py-2 px-5 rounded-full mt-5">Login</button>
            </form>
        </div>
    </div>
      
    </div>
  )
}

export default Login
