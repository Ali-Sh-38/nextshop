"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const [search, setSearch] = useState("");

    const handleSearch =()=>{
        console.log(searchParams.toString());

        const currentURL = new URLSearchParams(searchParams.toString())
        currentURL.set("title",search)
        
        router.push(`?${currentURL.toString()}`)
    }


    return (
        <>
            <div className="flex items-center gap-4 mb-6 md:justify-end justify-center">
                <input onChange={(e)=>setSearch(e.target.value)} className="border-2 border-zinc-300 outline-none rounded-md px-2 py-1" placeholder="جستجو کنید" type="text" />
                <button onClick={handleSearch} className="bg-blue-700 text-white px-2 py-1 rounded-md cursor-pointer">جستجو</button>
            </div>
        </>
    )
}

export default Search