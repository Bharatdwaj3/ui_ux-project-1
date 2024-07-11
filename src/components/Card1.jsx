import StarRateIcon from '@mui/icons-material/StarRate';
import PlaceIcon from '@mui/icons-material/Place';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function Card1() {
  return (
    <>
        <div className="bg-red-700 w-full h-[895px] grid grid-cols-4 gap-4 relative">
            <div className="mx-auto bg-sky-800 h-80 w-[300px] absolute inset-x-0 bottom-7 group:">
                <div className="h-36 w-[300px] bg-emerald-300">
                    <img className="h-full w-full "src="https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className="mx-auto bg-white h-44 w-full absolute inset-x-0 bottom-0">
                    <div className="h-7 w-full"><h1 className="text-center font-extralight text-xl font-serif text-blue-500">Grand Marbe Hotel</h1></div>
                    <div className="h-7 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-500"><PlaceIcon/> Moscow, Russia</h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-md font-serif text-gray-600">Rating <StarRateIcon/><StarHalfIcon/></h1></div>
                    <div className="h-10 w-full"><h1 className="text-center font-bold text-sm font-serif text-gray-600">153 Views</h1></div>
                    <div className="h-10 w-2/3 absolute bottom-0 left-0"><h1 className="font-bold text-xl text-center font-serif"><AttachMoneyIcon/>144</h1></div>
                    <div className="h-10 w-1/3 absolute bottom-0 right-0"><h1 className="font-light text-xl text-center text-gray-800">Details</h1></div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Card1
