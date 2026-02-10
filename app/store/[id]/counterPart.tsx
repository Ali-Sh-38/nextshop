"use client"
import Button from '@/copmonents/button'
import { handledecreaseItemQty, handleDeleteQty, handleIncreaseItemQty, selectProductQty} from '@/redux/itemCount'
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'


function CounterPart({ productId }: { productId: string }) {

    const items = useSelector((state : RootState)=> state.itemCount.items)
    const dispatch = useDispatch()
    const productQty = useSelector(selectProductQty)
    
    console.log(items);
    
    return (            
      <>
        <section className='flex gap-4 items-center text-[22px] mt-auto mb-4'>
            <Button onClick={()=>dispatch(handleIncreaseItemQty(productId))}> + </Button>
            <span className='text-blue-700 text-[32px]'> {productQty(productId)} </span>
            <Button onClick={()=>dispatch(handledecreaseItemQty(productId))}> - </Button>
            <Button onClick={()=>dispatch(handleDeleteQty(productId))}> حذف </Button>
        </section>
      </>
    )
}

export default CounterPart