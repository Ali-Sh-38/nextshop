import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TCartItem {
    id : string,
    qty : number,
}

interface TCartState {
    items : TCartItem[],
}

const initialState : TCartState = {
    items : [],
}


export const itemCount = createSlice({
    name : "itemCount",
    initialState,
    // action
    reducers : {
        handleIncreaseItemQty : (state , action : PayloadAction<string>)=>{
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId);

           if(!existingItem){                
            state.items.push({id : productId , qty : 1});
           } else {
            existingItem.qty += 1;
           }
        },
        handledecreaseItemQty : (state , action : PayloadAction<string>)=>{
            const productId = action.payload;
            const existingItem = state.items.find(item => item.id === productId)

            if(existingItem){
                if(existingItem.qty > 1){
                    existingItem.qty -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== productId)
                }
            }
        },
        handleDeleteQty : (state , action : PayloadAction<string>)=>{
            const productId = action.payload
            state.items = state.items.filter(item => item.id !== productId)
        },
        setState : (state , action : PayloadAction<TCartItem[]>)=>{
            state.items = action.payload
        }

    },
    // read state
    selectors : {
        selectProductQty : (state)=>  (id : string)=>{
            return state.items.find(item => item.id === id)?.qty || 0
        },
        selectTotalQty : (state)=>{
            return state.items.reduce((total , item)=>{
                return total + item.qty
            },0)
        }
    }
})




export const {handleIncreaseItemQty,handledecreaseItemQty,handleDeleteQty,setState} = itemCount.actions
export const {selectProductQty,selectTotalQty} = itemCount.selectors



// selectProductQty : (state)=>  (id : string)=>{
//             return state.items.find(item => item.id === id)?.qty || 0
//         }
//  
//      روش بالا همان روش پایین است اما ساده‌تر و کوتاه‌تر
//  
// selectProductQty : (state)=>{
//             return (id : string)=>{
//                 return state.items.find(item => item.id === id)?.qty || 0
//             }
//         }
