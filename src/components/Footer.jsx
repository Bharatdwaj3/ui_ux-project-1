import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <>
    <div className="bg-gradient-to-t from-orange-700 to-black w-full h-[500px] relative">
        <div className=" w-[1200px] h-24 absolute inset-x-0 top-0 ml-20  border-white"></div>
         <div className=" w-[1200px] h-80 absolute inset-20  border-white">
              <div className=" h-full grid grid-flow-col grid-rows-1 grid-cols-6 gap-0">

        <div className="  col-span-2">
          <div className=" h-48 relative">
          <div className=" w-full h-12">
              <h1 className="text-white font-extrabold text-left text-xl font-sans">Company Inc.</h1>
            </div>
            <div className=" h-36 w-full absolute bottom-0 left-0">
              <ul className="space-y-2 text-xs text-white font-thin font-serif">
                <InstagramIcon/><TwitterIcon/><FacebookIcon/>
                <li>WikiPedia</li>
                <li>WikiPedia</li>
                <li>WikiPedia</li>
              </ul>
            </div>
            </div>
          </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Resources</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
            </ul>
          </div>
        </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Resources</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
            </ul>
          </div>
        </div>

      <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Resources</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
            </ul>
          </div>
        </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Resources</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
              <li>WikiPedia</li>
            </ul>
          </div>
        </div>

</div>
         </div>
         <div className=" w-[1200px] h-24 absolute inset-x-0 bottom-0 ml-20 border-t border-white"></div>

    </div>
    </>
  )
}

export default Footer
