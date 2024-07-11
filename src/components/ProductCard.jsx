import StarRateIcon from '@mui/icons-material/StarRate';
import PlaceIcon from '@mui/icons-material/Place';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {yellow,red} from '@mui/material/colors'
function ProductCard() {
  return (
    <>
  
      <div className='bg-zinc-400 h-[900px] w-full'>
        <div className=" h-36 w-1/2 mr-auto ">
            <h4 className="text-8xl  text-center underline decoration-4 ml-9 font-sans font-bold">Destinations</h4>
         </div>
        <div className=" bg-zinc-400  w-full h-[500px] grid grid-cols-4 gap-3  place-items-center relative">
        
         <div className=" bg-blue-900 h-80 w-[300px]">
            <div className="h-36 w-[300px] bg-emerald-300">
                    <img className="h-full w-full "src="https://images.unsplash.com/photo-1652342532673-59a848be8a0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
                </div>
                <div className=" bg-white  h-44 w-full relative">
                    <div className="h-7 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-500"><PlaceIcon sx={{color : red [500]}}/> Moscow, Russia</h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-600">Rating 
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarHalfIcon sx={{color : yellow [500]}}/>
                      </h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-sm font-serif text-blue-600">153 Views</h1></div>
                    <div className="h-10 w-2/3 absolute bottom-0 left-0"><h1 className="font-bold text-xl text-center font-serif"><AttachMoneyIcon/>144</h1></div>
                    <div className="h-10 w-1/3 absolute bottom-0 right-0"><h1 className="font-light text-xl text-center text-gray-800">Details</h1></div>
                </div>
         </div>
         <div className=" bg-blue-900 h-80 w-[300px]">
            <div className="h-36 w-[300px] bg-emerald-300">
                    <img className="h-full w-full "src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGt5b3RvfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className=" bg-white  h-44 w-full relative">
                    <div className="h-7 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-500"><PlaceIcon sx={{color : red [500]}}/> Kyoto, Japan</h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-600">Rating 
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      </h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-sm font-serif text-blue-600">153 Views</h1></div>
                    <div className="h-10 w-2/3 absolute bottom-0 left-0"><h1 className="font-bold text-xl text-center font-serif"><AttachMoneyIcon/>144</h1></div>
                    <div className="h-10 w-1/3 absolute bottom-0 right-0"><h1 className="font-light text-xl text-center text-gray-800">Details</h1></div>
                </div>
         </div>
         <div className=" bg-blue-900 h-80 w-[300px]">
            <div className="h-36 w-[300px] bg-emerald-300">
                    <img className="h-full w-full "src="https://images.unsplash.com/photo-1597052145380-3e353db8f594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" alt="" />
                </div>
                <div className=" bg-white  h-44 w-full relative">
                    <div className="h-7 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-500"><PlaceIcon sx={{color : red [500]}}/> Bejing, China</h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-600">Rating 
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarHalfIcon sx={{ color : yellow [500]}}/>
                      <StarHalfIcon sx={{color : yellow [500]}}/>
                      

                      </h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-sm font-serif text-blue-600">153 Views</h1></div>
                    <div className="h-10 w-2/3 absolute bottom-0 left-0"><h1 className="font-bold text-xl text-center font-serif"><AttachMoneyIcon/>144</h1></div>
                    <div className="h-10 w-1/3 absolute bottom-0 right-0"><h1 className="font-light text-xl text-center text-gray-800">Details</h1></div>
                </div>
         </div>
         <div className=" bg-blue-900 h-80 w-[300px]">
            <div className="h-36 w-[300px] bg-emerald-300">
                    <img className="h-full w-full "src="https://images.unsplash.com/photo-1591079750991-af921ef2fd9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyYW5kZW5ndXJnJTIwdG9yfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className=" bg-white  h-44 w-full relative">
                    <div className="h-7 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-500"><PlaceIcon sx={{color : red [500]}}/> Berlin, Germany</h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-600">Rating 
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      <StarRateIcon sx={{ color : yellow [500]}}/>
                      </h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-sm font-serif text-blue-600">153 Views</h1></div>
                    <div className="h-10 w-2/3 absolute bottom-0 left-0"><h1 className="font-bold text-xl text-center font-serif"><AttachMoneyIcon/>144</h1></div>
                    <div className="h-10 w-1/3 absolute bottom-0 right-0"><h1 className="font-light text-xl text-center text-gray-800">Details</h1></div>
                </div>
         </div>
      </div>
      </div>
    </>
  )
}

export default ProductCard
