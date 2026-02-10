import { TProduuct } from '@/app/store/page'


function Productitem({title,image,price} : TProduuct) {
    
  return (
    <>
        <section className='flex flex-col p-4 my-2 gap-2 text-center font-medium rounded-md shadow-[0_0_32px_0_var(--tw-shadow-color)] hover:shadow-[0_0_32px_16px_var(--tw-shadow-color)] shadow-slate-300 duration-300'>
          <img src={image} className='w-9/10 mx-auto' alt=""/>
          <h3 className='md:text-[16px] text-[14px] line-clamp-2 h-12'>{title}</h3>
          <span className='text-blue-600 pt-2 h-8'>{price} $</span>
        </section>
    </>
  )
}

export default Productitem