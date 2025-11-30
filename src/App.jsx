import React from 'react'


const App = () => {
  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center gap-10'>
      <img src='/app_logo/logo_sq.png' alt="Spice N Paste Logo" className="w-25 h-25 rounded-full object-center object-cover" />
      <p className="text-white font-sans font-semibold whitespace-nowrap text-[24px] md:text-[36px] lg:text-[48px] xl:text-[56px]">This is Spice N Paste</p>
    </div>
  )
}

export default App