"use client"
import CartProduct from "@/copmonents/cartProduct";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function CartProductPart() {
    
    const items = useSelector((state: RootState) => state.itemCount.items);

    return (
        <>
            {items.map((item)=>(
                <CartProduct key={item.id} {...item}/>
            ))}
            
            {items.length === 0 && <p className="text-[24px] font-semibold text-center p-8">سبد خرید خالی است</p>}
        </>
    )
}

export default CartProductPart