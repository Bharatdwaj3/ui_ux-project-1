
function Soda() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 to-amber-950 w-full h-full grid grid-cols-4 grid-row-3 gap-0">
        <div className=" h-96 w-full ">
           <img className="m-auto h-80 w-80 rounded-l-3xl" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="  col-span-3 relative">
          <div className="ml-auto  h-64 absolute inset-x-10 bottom-10 opacity-80 w-[900px]  border-b-4 border-white"></div>
        </div>
        <div className="  col-span-3 relative">
          <div className="mr-auto  h-64 absolute inset-x-10 bottom-10 opacity-80 w-[900px]  border-b-4 border-white"></div>
        </div>
        <div className=" h-96 w-full">
          <img className="m-auto h-80 w-80 rounded-r-3xl" src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>

      </div>
    </>
  )
}

export default Soda
