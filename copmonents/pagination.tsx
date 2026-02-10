"use client"
import { useRouter } from "next/navigation"
import ReactPaginate from "react-paginate"


function Pagination({pageCount}:{pageCount : number}) {

    const router = useRouter()

    const handlePageClick = (e : {selected : number})=>{
        const page = e.selected + 1
        router.push(`?page=${page}&per_page=4`)
    }
    
  return (
    <>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className="flex justify-center gap-8 mt-4 cursor-pointer text-[20px] font-semibold"
        pageClassName="w-8 h-8 rounded-full flex justify-center items-center"
        activeClassName="text-blue-700 border-2"
        disabledClassName="text-gray-400"
        />
    </>
  )
}

export default Pagination


// containerClassName ,کل <ul>
// pageClassName ,هر <li> 
// pageLinkClassName ,تگ <a> 
// activeClassName ,<li> صفحه فعال,
// activeLinkClassName ,<a> صفحه فعال
// previousClassName ,<li> دکمه Previous
// nextClassName ,<li> دکمه Next
// previousLinkClassName ,<a> داخل Previous
// nextLinkClassName ,<a> داخل Next
// breakClassName ,<li> سه‌نقطه (...)
// breakLinkClassName ,<a> داخل سه‌نقطه
// disabledClassName ,<li> وقتی غیرفعال هست (Previous/Next)