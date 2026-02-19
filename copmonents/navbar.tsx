"use client"
import { selectTotalQty, setState } from "@/redux/itemCount"
import { RootState } from "@/redux/store"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
import { useTheme } from "next-themes"

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

  const {theme , setTheme} = useTheme()
    
  const pathname = usePathname()
  const totalQty = useSelector(selectTotalQty)

  return (
    <div className="w-full md:px-8 px-6 py-4 flex justify-between items-center bg-slate-900 text-white">
      <section className="flex md:gap-8 gap-4">
        {navLinks.map((item)=>(
          <Link className={pathname === item.href ? "text-blue-400" : "" }
           key={item.href} href={item.href}>{item.title}</Link>
        ))}
      </section>
      
      <section className="flex items-center gap-8">
        {Cookies.get("token") && (
          <button onClick={()=>{Cookies.remove("token"), redirect("/")}} className="cursor-pointer">خروج</button>
        )}
        <Link href="/cart" className={pathname === "/cart" ? "text-blue-400 flex items-center" : "flex items-center" }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        <span className="bg-red-700 w-4 h-4 flex justify-center items-center rounded-full text-white text-[12px]">{totalQty}</span>
        </Link>
      <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" 
        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        }
      </button>
      </section>
    </div>
  )
}

export default Navbar