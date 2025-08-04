
import { RiUser3Line } from "react-icons/ri";
import { IoIosHelpCircleOutline,IoIosSearch} from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";




const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 h-20 w-full  shadow-xl">
        {/* Logo and title */}

        <div className='flex items-center cursor-pointer'>
            <img className="w-12" src="/logo.png" alt="foodish logo a plate which is full with colornary indian food" />
            <p className='text-2xl text-white ml-2'>F<span className='text-orange-500'>o</span><span className='text-green-500'>o</span>dish</p>
        </div>

        {/* Navigation */}

        <nav className='text-white'>
             <ul className='flex gap-8'>
                <li className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'><IoIosSearch  className='size-5' />Search</li>
                <li className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'><CiDiscount1 className='size-5' />Offers</li>
                <li className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'><IoIosHelpCircleOutline className='size-5' />Help</li>
                <li className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'><RiUser3Line  className='size-4'/>Sign In</li>
                <li className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'><BsBag className='size-4' />Cart</li>
             </ul>
        </nav>

  </div>




    
  )
}

export default Header