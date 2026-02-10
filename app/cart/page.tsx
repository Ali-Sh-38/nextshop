import Container from '@/copmonents/container'
import CartProductPart from './cartProductPart'
import PayPart from './payPart'

function Cart() {
  return (
    <>
        <Container>
          <h1 className='text-2xl mb-4 font-semibold'>سبد خرید</h1>
            <CartProductPart/>
            
            <PayPart/>
        </Container>
    </>
  )
}

export default Cart