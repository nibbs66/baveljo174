import {useEffect, useRef,useState} from 'react';
import {signIn, getSession} from "next-auth/react";
import {useRouter} from "next/router";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";




const Login = () => {

    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().required('Required'),
        password: yup.string()
            .required('Required')
            .min(6),
    })
    const { register, handleSubmit, setFocus, formState: {errors}, reset } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(()=>{
        setFocus('username', {shouldSelect: true})
    },[setFocus])

    const onSubmit = async(data)=> {

        try{
            const res = await signIn('credentials', {
                redirect: false,
                email:  data.email,
                password:   data.password,
            });
            console.log(res)
            if(res.error){
              console.log(err)

            }else if(res.ok){

                await getSession()
                reset({username: '', password: ''})
                await router.push('/admin/scheduling')

                /*if(location === 'home'){
                    router.push('/')
                }*/

                /* {
                     if (location === 'checkout') {
                         router.push(`/cart/${cart.cartId}`)
                     }
                 }*/



            }
        }catch(err){
            console.log(err)
        }
    }

    return (

        <div className={` flex items-center justify-center h-screen w-screen`}>
            <div className={`flex flex-col w-full items-center `}>


                <form className={`flex flex-col items-center gap-4 w-3/4 lg:w-1/3 py-10 md:border rounded-md md:shadow-xl bg-[ghostwhite] text-slate-400`} onSubmit={handleSubmit(onSubmit)}>
                   <div className={`flex flex-col`}>
                        <label className={`px-1 ${errors.email && 'text-red-500 font-bold'}`}
                               htmlFor="email">Email</label>
                        <input
                            className={`border rounded border-slate-600 p-1 text-sm focus:outline-0 text-slate-500`} {...register("email")}/>

                    </div>
                    <div className={`flex flex-col`}>
                        <label className={`px-1 ${errors.password && 'text-red-500 font-bold'}`} htmlFor="">Password</label>
                        <input className={`border rounded border-slate-600 p-1 text-sm focus:outline-0 text-slate-500`}  {...register("password")}
                               type={'password'}/>

                    </div>

                    <div className={`flex items-center justify-center`}>
                        <button className={`bg-blue-500 uppercase text-white rounded py-1 px-4`} type='submit'>Login</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;
