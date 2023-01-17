import React ,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {user,logIn} = UserAuth()
    const navigate = useNavigate()
    const handelSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try {
           
        
            await logIn(email,password)
            navigate('/')
        }
        catch (error)
        {
            console.log(error)
            setError(error.message)
        }
       

       
    }
  return (
    <div>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/8645352a-866a-43d7-a9d4-97ef671dea6e/EG-en-20230103-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold  '>Sign In</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> :null}
                    <form onSubmit={handelSubmit} className='flex w-full flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='E-mail' autoComplete='email'></input>
                        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password'></input>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold '>Log In</button>
                        <div className='flex justify-between items-center text-gray-600 text-sm'>
                            <p><input className='mr-2' type='checkbox'/>Remember</p>
                            <p>Need Help ?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>
                        <Link to='/signup'>Sign UP</Link></p>
                    </form>
                </div>

            </div>
        </div>


    </div>
</div>
  )
}

export default Login