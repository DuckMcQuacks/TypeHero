import Link from "next/link";
import {useState} from "react";

export default function login()
{
    interface login {
        username: string,
        password: string
    }
    const [formValues, setFormValues] = useState<login>({
        username:"",
        password:""
    });
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setFormValues(prev=>{
            return {...prev, [e.target.name]: e.target.value}            
        })
    }
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    return(
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <hr />
                <div>
                <input type="text" name="username" id="username" value={formValues.username} onChange={changeHandler} placeholder="Username"/>
                <input type="password" name="password" id="password" value={formValues.password} onChange={changeHandler} placeholder="Password"/>
                <button>Login</button>
                <div style={{background:"transparent"}}>
                Don't have an account?
                <Link href={"/signup"} style={{background:"transparent", color:"#FFAE00", padding:"10px", display:" inline-block"}}>Sign up</Link>
                </div>
                </div>
            </form>
        </div>
    )
}