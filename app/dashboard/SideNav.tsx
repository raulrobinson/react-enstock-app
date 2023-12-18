import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri"
import { BsFillBarChartFill, BsPersonFillLock } from "react-icons/bs"
import { MdShoppingCart, MdCategory } from "react-icons/md"
import { LogOut } from "@/utils";
import { useRouter } from "next/navigation";

export default function SideNav() { 
     const router = useRouter()
    return (
         <div className='w-[15%] md:block hidden'>
            <nav className='w-[15%] fixed flex flex-col left-0 h-[100vh] bg-[#0693e3] p-4 space-y-8'>
                <Link href="/" className='hover:text-white mt-4 mb-8 font-bold text-xl text-gray-300'>EnStock</Link>
                <div className="w-full flex items-center">
                      <RiDashboardFill className="text-[#FFFFFF] hover:text-white mr-2"/>
                     <Link href="/dashboard" className="text-[#E0E0E0] hover:text-white">Tablero</Link>
                </div>
                <div className="w-full flex items-center">
                      <BsFillBarChartFill className="text-[#FFFFFF] hover:text-white mr-2"/>
                     <Link href="/sales" className="text-[#E0E0E0] hover:text-white">Ventas</Link>
                </div>
                <div className="w-full flex items-center">
                      <MdShoppingCart className="text-[#FFFFFF] hover:text-white mr-2"/>
                     <Link href="/products" className="text-[#E0E0E0] hover:text-white">Productos</Link>
                </div>
                <div className="w-full flex items-center">
                      <MdCategory className="text-[#FFFFFF] hover:text-white mr-2"/>
                     <Link href="/categories" className="text-[#E0E0E0] hover:text-white">Categorias</Link>
                </div>
                <div className="w-full flex items-center">
                      <BsPersonFillLock className="text-[#FFFFFF] hover:text-white mr-2"/>
                     <Link href="/" className="text-[#E0E0E0] hover:text-white" onClick={() => LogOut(router)}>Salir</Link>
                </div>
            </nav>
         </div>
    )
}