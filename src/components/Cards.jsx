import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex px-10 gap-5 py-10'>
        <div className='cardContainer w-1/2 '>
            <div className='card relative w-full h-96 bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute  rounded-full bottom-10 text-[#CDEA68] left-10 px-3 py-1 border-2 border-[#CDEA68]'>&copy;2019-2023</button>
            </div>
        </div>
        <div className='cardContainer w-1/2 flex gap-5'>
            <div className='card relative w-1/2 h-96 bg-[#212121] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute rounded-full bottom-10 text-white left-10 px-3 py-1 border-2 border-white'>&copy;2019-2023</button>
            </div>
            <div className='card relative w-1/2 h-96 bg-[#212121] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute rounded-full bottom-10 text-white left-10 px-3 py-1 border-2 border-white'>&copy;2019-2023</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
