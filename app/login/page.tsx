"use client"
import Container from '@/copmonents/container'
import axios from 'axios';
import { useState } from 'react';
import Cookies from "js-cookie"
import { redirect } from 'next/navigation';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const data = axios({
        url: "/login",
        method: "POST",
        data:{
            username : username,
            password : password
        }
    })
    const handleLogin = ()=>{
        
        const response = {
            token : "fsdahoodfsioifssadoijfsoiajjofsid",
            expire : 7
        }
        
        Cookies.set("token",response.token,{expires : response.expire})
        redirect("/")
        
    }
        
  return (
    <>
        <Container>
            <h1 className='text-2xl mb-4 font-semibold'> ورود</h1>
            {
                Cookies.get("token") ? (
                    <p className="font-semibold border-b-4 border-blue-700 w-max p-2">
                       شما قبلا وارد شدید
                    </p>
                )
                :
                (
                <div className='p-4 flex flex-col gap-2 md:w-1/3 w-full mx-auto font-semibold border-4 border-slate-900 rounded-xl'>
                    <section className='flex flex-col gap-1'>
                        <span>نام کاربری</span>
                        <input onChange={(e)=>setUsername(e.target.value)} className='bg-zinc-200 rounded-md' type="text" />
                    </section>
                    <section className='flex flex-col gap-1'>
                        <span>رمز ورود </span>
                        <input onChange={(e)=>setPassword(e.target.value)} className='bg-zinc-200 rounded-md' type="password" />
                    </section>

                    <button onClick={handleLogin} className='bg-blue-700 text-white p-1 mt-2 rounded-md cursor-pointer'>ورود</button>
                </div>
                )
            }
        </Container>
    </>
  )
}

export default Login