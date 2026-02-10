"use client"
import { handledecreaseItemQty, handleDeleteQty, handleIncreaseItemQty, TCartItem } from '@/redux/itemCount'
import Button from './button'
import axios from 'axios'
import { TProduuct } from '@/app/store/page'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


function CartProduct({id,qty} : TCartItem) {

    const [data, setData] = useState({} as TProduuct);

    useEffect(() => {
        axios(`http://localhost:3001/products/${id}`).then((result)=>{
            const {data} = result
            setData(data)
        })
    }, []);

    const dispatch = useDispatch()
    
  return (
    <>
        <div className='w-full mt-4 flex shadow-[0_0_32px_0_var(--tw-shadow-color)] shadow-slate-300 p-4 rounded-lg'>
            <section className='md:w-1/10 w-4/10'>
                <img className='rounded-md' src={data.image} alt=""/>
            </section>
            <section className='md:w-8/10 w-6/10 font-semibold px-4'>
                <h3 className='mb-2'> {data.title} </h3>
                <p> قیمت محصول : <span className='text-blue-700'>{data.price} $</span></p>
                <p> تعداد : <span className='text-blue-700'>{qty}</span></p>
                
                <div className='flex gap-4 p-2'>
                    <Button onClick={()=>dispatch(handleIncreaseItemQty(id))}> + </Button>
                    <Button onClick={()=>dispatch(handledecreaseItemQty(id))}> - </Button>
                    <Button onClick={()=>dispatch(handleDeleteQty(id))}> حذف </Button>
                </div>
            </section>
        </div>
    </>
  )
}

export default CartProduct