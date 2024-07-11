function TravelBanner() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-slate-900  w-full h-[700px]">
        <img className="object-cover absolute mix-blend-overlay size-full "src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcml2ZXIlMjB0b3dufGVufDB8fDB8fHww" alt="" />
       <div className="p-24">
            <div className=" h-[500px] w-[600px] opacity-30 border-y-4 border-white"></div>
         </div>
    </div>
    </>
  )
}

export default TravelBanner
