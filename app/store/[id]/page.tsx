import Container from '@/copmonents/container'
import axios from 'axios'
import { TProduuct } from '../page'
import CounterPart from './counterPart'

interface TProduuctPage {
    params : Promise<{id : string}>,
    searchParams : Promise<{}>,
}

async function ProductPage(props : TProduuctPage) {

    const {id} = await props.params
    const {data} = await axios<TProduuct>(`http://localhost:3001/products/${id}`)

  return (
    <>
        <Container>
            <div className="w-full flex md:flex-row flex-col mt-8 p-4 border-y-4 border-slate-900 dark:border-slate-300">
                <div className='md:w-1/4 w-full p-4'>
                    <img src={data.image}  alt="" />
                </div>
                <div className='md:w-3/4 w-full flex flex-col'>
                    <h1 className='text-[24px] font-medium '>{data.title}</h1>
                    <p className='text-blue-700 text-[28px]  p-2'>{data.price} $</p>
                    
                    <CounterPart productId={id}/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ProductPage