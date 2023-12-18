import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri"
import { BsFillBarChartFill, BsPersonFillLock } from "react-icons/bs"
import { MdShoppingCart, MdCategory } from "react-icons/md"
import { LogOut } from "@/utils";
import { useRouter } from "next/navigation";
import { AiFillCloseCircle } from "react-icons/ai"

export default function MobileNav({setShowModal}: any) { 
     const router = useRouter()
    return (
         <div className='w-2/3 h-[100vh] fixed top-0 right-0 md:hidden block bg-[#160F3F] z-50'>
            <nav className='w-full flex flex-col h-[100vh] p-4 space-y-8'>
                <div className="w-full flex items-center space-between">
                    <div className="mr-[75px]">
                        <Link href="/" className='hover:text-white mt-4 mb-8 font-bold text-xl text-gray-300'>EnStock</Link>
                    </div>
                    <div onClick={() => setShowModal(false)}>
                           <AiFillCloseCircle className="text-3xl cursor-pointer text-white"/>
                    </div>
                </div>
                <div className="w-full flex items-center">
                      <RiDashboardFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/dashboard" className="text-[#9AA8BD] hover:text-white">Tablero</Link>
                </div>
                <div className="w-full flex items-center">
                      <BsFillBarChartFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/sales" className="text-[#9AA8BD] hover:text-white">Ventas</Link>
                </div>
                <div className="w-full flex items-center">
                      <MdShoppingCart className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/products" className="text-[#9AA8BD] hover:text-white">Productos</Link>
                </div>
                <div className="w-full flex items-center">
                      <MdCategory className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/categories" className="text-[#9AA8BD] hover:text-white">Categorias</Link>
                </div>
                <div className="w-full flex items-center">
                      <BsPersonFillLock className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/" className="text-[#9AA8BD] hover:text-white" onClick={() => LogOut(router)}>Salir</Link>
                </div>
            </nav>
         </div>
    )
}