import React from 'react'


const ImageGrid = () => {
  return (
   <>
   <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
   <div className=' border-2 border-blue-500'><img src='https://cdn.pixabay.com/photo/2021/09/09/06/56/car-6609625_1280.jpg'/></div>
   <div className='border-2 border-blue-500 col-span-2 '><img src='https://cdn.pixabay.com/photo/2023/06/13/18/52/ai-generated-8061609_1280.jpg'/></div>
   <div className='border-2 border-blue-500 '><img src='https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_1280.jpg'/></div>

   <div className='border-2 border-blue-500 min-h-[50px]'><img src='https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498_1280.jpg'/></div>
   <div className='border-2  border-blue-500 min-h-[50px]'><img src='https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg'/></div>
   <div className='border-2  border-blue-500 min-h-[50px] col-span-2'><img width={'100%'} src="https://cdn.pixabay.com/photo/2023/06/13/18/52/ai-generated-8061608_1280.jpg"/></div>
   <div className='border-2  border-blue-500 min-h-[50px]'><img src='https://cdn.pixabay.com/photo/2024/08/17/23/30/ai-generated-8976730_1280.png'/></div>
   </div>
   </>
  )
}

export default ImageGrid