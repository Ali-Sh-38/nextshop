"use client"
import { selectTotalQty, setState } from "@/redux/itemCount"
import { RootState } from "@/redux/store"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"

const navLinks = [
  {
    href : "/",
    title : "خانه",
  },
  {
    href : "/store",
    title : "فروشگاه",
  },
  {
    href : "/dashboard",
    title : "پنل مدیریت",
  },
  {
    href : "/login",
    title : "ورود",
  },
]

function Navbar() {

  const items = useSelector((state: RootState) => state.itemCount.items);
  const dispatch = useDispatch()
  const hasLoaded = useRef(false)

  useEffect(() => {
    if(!hasLoaded.current) return ;
    
    localStorage.setItem("items" , JSON.stringify(items))
  
  }, [items]);

  useEffect(() => {
    const storedItem = localStorage.getItem("items")
    if(storedItem){
      const parsedItem = JSON.parse(storedItem)
      dispatch(setState(parsedItem))
    }    

    hasLoaded.current = true ;
  }, []);

    
  const pathname = usePathname()
  const totalQty = useSelector(selectTotalQty)

  return (
    <div className="w-full md:px-8 px-6 py-4 flex justify-between items-center bg-slate-900 text-white font-semibold">
      <section className="flex md:gap-8 gap-4">
        {navLinks.map((item)=>(
          <Link className={pathname === item.href ? "text-blue-400" : "" }
           key={item.href} href={item.href}>{item.title}</Link>
        ))}
      </section>
      
      <section className="flex items-center">
        <Link href="/cart" className={pathname === "/cart" ? "text-blue-400" : "" }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
        <span className="bg-red-700 w-4 h-4 flex justify-center items-center rounded-full text-white text-[12px]">{totalQty}</span>
        
        {Cookies.get("token") && (
          <button onClick={()=>{Cookies.remove("token"), redirect("/")}} className="md:mr-8 mr-4 cursor-pointer">خروج</button>
        )}
      </section>
    </div>
  )
}

export default Navbar