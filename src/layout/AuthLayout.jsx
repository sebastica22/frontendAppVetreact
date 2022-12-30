import {Outlet} from 'react-router-dom'
import Footer from "../components/Footer"

const AuthLayout = () => {
  return (
    <>
        
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-15 p-7 items-center">
        <Outlet/>
      </main>
      <Footer/>
      
    </>
  )
}

export default AuthLayout