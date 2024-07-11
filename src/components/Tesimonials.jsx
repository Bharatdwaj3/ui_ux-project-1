import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { blue } from '@mui/material/colors';
function Tesimonials() {
  return (
    <>  
     <div className='bg-zinc-400 h-[900px] w-full'>
        <div className=" h-36 w-1/2 mr-auto ">
            <h4 className="text-8xl  text-center underline decoration-4 ml-9 font-sans font-bold">Destinations</h4>
         </div>
        <div className="bg-zinc-400 h-[500px] w-full">
            <div className="grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 justify-between place-items-center">
              <div className=" h-96 w-72 rounded-xl">
                <div className="bg-gradient-to-b from-sky-900 h-96 w-full rounded-xl">
                  <div className=" h-32 w-32 ml-20 rounded-full">
                    <img className="object-cover h-32 w-32 rounded-full" src="https://plus.unsplash.com/premium_photo-1675461588230-732ec738a0f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt=""/>
                  </div>
                <div className="bg-gradient-to-r from-sky-300 to-white h-2/3 w-full rounded-b-xl pt-8">
                  <div className=" h-48 w-48 border-y-4  mx-auto border-black">
                    <p className="text-black text-center text-xs font-extrabold font-mono">I recently embarked on a European adventure with Wanderlust Travels,
                       and it was an experience of a lifetime! From the cobblestone streets of Paris to the picturesque canals of Venice, 
                       every moment was filled with wonders..</p>
                    < FormatQuoteIcon sx={{ fontSize: 40, color : blue [500]}} /> 
                  </div>
                </div>
                </div>
                
              </div>
              <div className="bg-amber-400 h-96 w-72 rounded-xl">
                <div className="bg-sky-900 h-96 w-full rounded-xl">
                  <div className="bg-teal-900 h-32 w-32 ml-20 rounded-full">
                    <img className="object-cover h-32 w-32 rounded-full" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt=""/>
                  </div>
                 <div className="bg-gradient-to-r from-sky-300 to-white h-2/3 w-full rounded-b-xl pt-8">
                  <div className=" h-48 w-48 border-y-4  mx-auto border-black">
                    <p className="text-black text-center text-xs font-extrabold font-mono">I recently embarked on a European adventure with Wanderlust Travels,
                       and it was an experience of a lifetime! From the cobblestone streets of Paris to the picturesque canals of Venice, 
                       every moment was filled with wonders..</p>
                    < FormatQuoteIcon sx={{ fontSize: 40, color : blue [500]}} /> 
                  </div>
                </div>
                </div>
                
              </div>
              <div className="bg-amber-800 h-96 w-72 rounded-xl">
                <div className="bg-sky-900 h-96 w-full rounded-xl">
                  <div className="bg-teal-900 h-32 w-32 ml-20 rounded-full">
                    <img className="object-cover h-32 w-32 rounded-full" src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt=""/>
                  </div>
                 <div className="bg-gradient-to-r from-sky-300 to-white h-2/3 w-full rounded-b-xl pt-8">
                  <div className=" h-48 w-48 border-y-4  mx-auto border-black">
                    <p className="text-black text-center text-xs font-extrabold font-mono">I recently embarked on a European adventure with Wanderlust Travels,
                       and it was an experience of a lifetime! From the cobblestone streets of Paris to the picturesque canals of Venice, 
                       every moment was filled with wonders..</p>
                    < FormatQuoteIcon sx={{ fontSize: 40, color : blue [500]}} /> 
                  </div>
                </div>
                </div>
                
              </div>
            </div>
        </div>    
        </div>    

    </>
  )
}

export default Tesimonials
