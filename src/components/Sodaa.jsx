
function Soda() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 to-amber-950 w-full h-[895px] grid grid-cols-4 grid-row-3 gap-0">
        <div className=" h-96 w-full ">
           <img className="m-auto h-80 w-96 " src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="  col-span-3 relative">
          <div className="ml-auto    h-96 absolute inset-x-10 bottom-10 opacity-80 w-[900px]  border-b-4 border-white">
             <h1 className="bg-gradient-to-l from-blue-500    h-28 text-right  font-mono text-white font-extrabold text-6xl">About US</h1>
            <p className="italic text-center text-xl text-white font-extrabold">
              Experience the thrill of conquering towering peaks and exploring rugged terrains with our mountain trekking tours. 
              Designed for adventurers and nature enthusiasts alike, our treks offer an unforgettable journey through some of the most breathtaking landscapes.
              Join us on our mountain treks for an adventure of a lifetime, where the wonders of nature await you at every turn
            </p>
          </div>
        </div>
        <div className="  col-span-3 relative">
          <div className="mr-auto  h-96 absolute inset-x-10 bottom-10 opacity-80 w-[900px]  border-b-4 border-white">
            <h1 className="bg-gradient-to-r from-amber-500 from-10% h-28 text-left  font-mono text-white font-extrabold text-6xl">About US</h1>
            <p className="italic text-center text-xl text-white font-extrabold">
              Dive into the serene beauty of the ocean with our sea tours.
              Perfect for those looking to relax and explore marine wonders, our tours offer a blend of adventure and tranquility
              Join us on our sea tours for an adventure of a lifetime, where the wonders of nature await you at every turn
            </p>
          </div>
        </div>
        <div className=" h-96 w-full">
          <img className="m-auto h-80 w-96 " src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>

      </div>
    </>
  )
}

export default Soda

