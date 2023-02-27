import Link from "next/link";
import {useState} from "react";

export default function signup()
{
    interface signup {
        username: string,
        password: string,
        passwordConfirm: string
    }
    const [formValues, setFormValues] = useState<signup>({
        username:"",
        password:"",
        passwordConfirm: "",
    });
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setFormValues(prev=>{
            return {...prev, [e.target.name]: e.target.value}            
        })
    }
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(formValues.password != formValues.passwordConfirm){
            alert("Passwords do not match!");
            return 3
        }
        if(formValues.username.includes(" ")){
            alert("Username cannot contain white spaces!")
            return 1
        }
        if(formValues.username.replace(/[^a-zA-Z0-9 ]/g, '')!=formValues.username){
            alert("Username cannot contain special characters!")
            return 2
        }
        
    }
    return(
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>REGISTER</h1>
                <hr />
                <div>
                <input required type="text" name="username" id="username" value={formValues.username} onChange={changeHandler} placeholder="Username"/>
                <input required type="password" name="password" id="password" value={formValues.password} onChange={changeHandler} placeholder="Password"/>
                <input required type="password" name="passwordConfirm" id="passwordConfirm" value={formValues.passwordConfirm} onChange={changeHandler} placeholder="Password again"/>
                <button>Sign up</button>
                <div style={{background:"transparent"}}>
                Have an account?
                <Link href={"/login"} style={{background:"transparent", color:"#FFAE00", padding:"10px", display:" inline-block"}}>Login</Link>
                </div>
                </div>
            </form>
        </div>
    )
}