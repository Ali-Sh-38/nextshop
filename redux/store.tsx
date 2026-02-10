"use client"
import { configureStore } from "@reduxjs/toolkit" 
import { itemCount } from "./itemCount" 
import { Provider } from "react-redux"


const store = configureStore({
  reducer : {
    itemCount : itemCount.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

// typeof : تایپ چیزی که میخوام رو بده
// ReturnType : تایپ مقداری که استخراج شده رو برگردون 



// provider
function StoreProvider({children} : {children : React.ReactNode}){
  return (
    <>
    <Provider store={store}>
      {children}
    </Provider>
    </>
  )
}

export default StoreProvider