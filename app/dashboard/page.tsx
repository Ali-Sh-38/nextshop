"use client"
import Container from "@/copmonents/container"
import { ChangeEvent, useState } from "react";
import axios from "axios";

interface TNewProduct {
  title : string ;
  image : string ;
  price : number ;
}

function Dashboard() {

    const [newProduct, setNewProduct] = useState({} as TNewProduct);

    const handleChangeProduct = (e : ChangeEvent<HTMLInputElement>)=>{
      const { name , value } = e.target

      setNewProduct({
        ...newProduct ,
        [name] : value

//مثال: title : "لپ‌تاپ"
      })
    }

    const handleCreatProduct = ()=>{
      console.log(newProduct);

      axios({
        method : "POST",
        url : "http://localhost:3001/products",
        data : {
          id : Math.floor(Math.random()*1000).toString(),
          title : newProduct.title,
          image : newProduct.image,
          price : newProduct.price,
        }
      })
    }

    return (
      <>
        <Container>
            <h1 className='text-2xl mb-4 font-semibold'>پنل مدیریت</h1>
            <div className="border-4 border-slate-900 rounded-xl p-4">
                <section className="flex md:flex-row flex-col gap-8">
                  <input onChange={handleChangeProduct} name="title" type="text" placeholder="عنوان" className="w-full p-2 border-b-2 border-zinc-400"/>
                  <input onChange={handleChangeProduct} name="image" type="text" placeholder="لینک عکس" className="w-full p-2 border-b-2 border-zinc-400"/>
                  <input onChange={handleChangeProduct} name="price" type="text" placeholder="قیمت" className="w-full p-2 border-b-2 border-zinc-400"/>
                </section>
                <button onClick={handleCreatProduct} className="md:w-1/4 w-full md:mr-0 mx-auto mt-12 bg-blue-700 text-white rounded-md p-2 cursor-pointer font-semibold">ثبت</button>
            </div>
        </Container>
      </>
    )
}

export default Dashboard