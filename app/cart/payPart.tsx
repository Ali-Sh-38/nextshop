"use client"
import Button from '@/copmonents/button'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { TProduuct } from '../store/page';

export interface Tdiscount {
  id: string
  code: string
  persentage: number
}

function PayPart() {
    
    const [discountPrice, setDiscountPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [discountCode, setDiscountCode] = useState("");

    const handleSubmitDiscount = (e : React.MouseEvent)=>{
        e.preventDefault();
        axios(`http://localhost:3001/discount?code=${discountCode}`).then((result)=>{
            const data = result.data as Tdiscount[];

            let discountPrice = totalPrice * data[0].persentage / 100 ;
            let finalPrice =  totalPrice - discountPrice ;

            setDiscountPrice(discountPrice)
            setFinalPrice(finalPrice)
        }) 
    }

    // ========= total part

        const items = useSelector((state : RootState)=> state.itemCount.items)
    
        const [data, setData] = useState<TProduuct[]>();
    
        useEffect(() => {
            axios(`http://localhost:3001/products`).then((result)=>{
                const {data} = result
                setData(data)
            })
        }, []);

        const totalPrice = items.reduce((total , item)=>{ 
            let selctedProduct = data?.find(ProductItem => ProductItem.id === item.id)
            
            return total + (selctedProduct?.price || 0) * item.qty
        },0)
    
  return (
    <>
        <div className='font-semibold mt-4'>
            <form className='flex gap-4 mb-4'>
                <input onChange={(e)=>setDiscountCode(e.target.value)} type="text" placeholder='کد تخفیف را وارد کنید' className='bg-slate-200 rounded-md px-2'/>
                <Button onClick={handleSubmitDiscount}>اعمال</Button>
            </form>
            
            

            <div className='text-[20px] border-r-4 border-red-700 p-4 w-max'>
                <p> قیمت کل : {totalPrice} </p>
                <p className='text-red-700'> تخفیف  : {discountPrice}</p>
                <p> قیمت نهایی : {finalPrice}</p>
            </div>
        </div>
    </>
  )
}

export default PayPart