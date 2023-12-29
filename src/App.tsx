import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import Home from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';
import './globals.css';
import {Routes, Route} from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        { /** Public Routes */}
        <Route element={<AuthLayout />}>
        <Route path='/Sign-in' element={<SigninForm/>}/>
        <Route path='/Sign-up' element={<SignupForm/>}/>
        </Route>

        { /** Privte Routes */}
        <Route element={<RootLayout/>}>
        <Route index element={<Home/>} />
        </Route>
      </Routes>
      <Toaster />

    </main>
  )
}

export default App