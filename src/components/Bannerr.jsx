

function Bannerr() {
  return (
    <div >
        <div className="flex justify-evenly flex-col sm:flex-row items-center bg-[#1313130D] mt-10 p-16">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold">Books to freshen <br /> up your bookshelf</h1>
          <div className=" mt-12 flex justify-center sm:justify-start">
          <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">View The List</span>
</a>
          </div>
            </div>
            <div className="">
                <img src="https://i.ibb.co/xz1JWtg/pngwing-1.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Bannerr