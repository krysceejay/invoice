import {useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {DataContext} from '../store/globalState'
import {postData} from '../utils/fetchData'
import Layout from '../components/layouts/AuthLayout'

const SignUp = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isLoading: false,
  })

  const router = useRouter()
  const {state, dispatch} = useContext(DataContext)
  const { isAuthenticated, authUser } = state

  const { email, password, isLoading } = formData

  const handleOnchange = e => {
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
  }

  useEffect(() => {
    if(isAuthenticated) return router.push('/home')
  }, [isAuthenticated])

  return (
    <Layout title="home">
      <div className="flex flex-col justify-end items-center h-screen">
        <div className="bg-white w-full rounded-t-3xl px-6 pt-14">
          <h3 className="text-xl font-bold">Glad to have you</h3>
          <p className="text-base mt-3">Create a free account</p>
          <form className="my-5">
            <div>
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="text" 
              placeholder="First Name" />
            </div>
            <div className="mt-5">
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="text" 
              placeholder="Last Name" />
            </div>
            <div className="mt-5">
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="email" 
              placeholder="Email" />
            </div>
            <div className="mt-5">
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="text" 
              placeholder="Phone Number" />
            </div>
            <div className="mt-5">
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="password" 
              placeholder="Password" />
            </div>
            <div className="mt-5">
              <input 
              className="bg-gray-100 h-12 appearance-none border-2 border-gray-100 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100" 
              type="text" 
              placeholder="Referral Code" />
            </div>
            <button class="bg-black text-white py-4 px-4 rounded-md focus:outline-none w-full mt-8" 
            type="button">
              Create a free account
            </button>
            <span className="text-form-text mt-3 inline-block">
              Already have an account? <Link href="/"><strong className="text-black">Log in here</strong></Link>
            </span>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
