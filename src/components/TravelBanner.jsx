
import Button from '@mui/material/Button';
function TravelBanner() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-slate-900  w-full h-[700px]">
        <img className="object-cover absolute mix-blend-overlay size-full "src="https://plus.unsplash.com/premium_photo-1663099849583-fce9a750def5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbGVyJTIwZ3JvdXAlMjB3YWxraW5nfGVufDB8fDB8fHww" alt="" />
       <div className="p-24">
        <h1 className="text-white text-bold font-sans text-7xl">WonderLust Travels</h1>
            <div className=" h-[500px] w-[600px] opacity-70 border-y-4 border-white">
              <p className="text-gray-100 text-light font-serif text-xl">
                Embark on a journey with WonderLust Travels and become part of a community of like-minded explorers.
                With WonderLust Travels, the world is at your fingertips. Whether a seeking adventure, relaxation, cultural immersion, or a mix of everything, we are here to make your travel dreams come true. Let us guide you on a journey of a lifetime, where every moment is a discovery, and every destination is a wonder. Embrace the adventure with WonderLust Travels
                </p>
                 <div className="w-full h-64 relative justify-between">
                  <div className="absolute bottom-0 left-0"> 
                     <Button className="h-14 w-48" variant="contained">Outlined</Button>
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <Button className="h-14 w-48" variant="contained">Outlined</Button>
                  </div>
                   
                 
                 
                 </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default TravelBanner
