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
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(formValues.username.includes(" ")){
            alert("Username cannot contain white spaces!")
            return 1;
        }
        if(formValues.username.replace(/[^a-zA-Z0-9 ]/g, '')!=formValues.username){
            alert("Username cannot contain special characters!")
            return 2;
        }
        await fetch('/api/userLoginController', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formValues.username,
              password: formValues.password,
            }),
          }) .then((response) => response.json())
          .then((data) =>{          
            if(data == "failed"){
              alert("Username or password is incorrect");
              return 1;
            }
            window.localStorage.setItem("sessionKey", data)
          });
          setFormValues({
            username:"",
            password:""
        })
    }
    return(
        <div className="loginPage">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <hr />
                <div>
                <input required type="text" name="username" id="username" value={formValues.username} onChange={changeHandler} placeholder="Username"/>
                <input required type="password" name="password" id="password" value={formValues.password} onChange={changeHandler} placeholder="Password"/>
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