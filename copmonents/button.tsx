
interface TButton {
  children : React.ReactNode ;
  onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
}


function Button({children , onClick} : TButton) {
  return (
    <>
        <button onClick={onClick} className='bg-slate-900 text-white min-w-8 h-8 px-2 rounded-md cursor-pointer'>{children}</button>
    </>
  )
}

export default Button