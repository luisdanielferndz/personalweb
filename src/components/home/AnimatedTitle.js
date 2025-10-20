  
const AnimatedTitle = () => {
    return (
      <div className="w-full h-full flex items-center justify-center font-luxury text-[#222] overflow-hidden ">
        <div className="relative w-[90vmin] h-[90vmin]">
          {/* Parte superior */}
          <div className="absolute top-0 h-1/2 w-full overflow-hidden border-b-[1vmin] border-black flex items-end">
            <div className="animate-apple-top text-[15vmin] absolute bottom-0 pl-[2vmin] leading-none">
              <span className="block text-[#767676] ">luis daniel</span>
              <span className="block">fernández</span>
            </div>
          </div>
  
          {/* Parte inferior */}
          <div className="absolute bottom-0 h-1/2 w-full overflow-hidden flex items-start">
            <div className="animate-apple-bottom text-[7vmin] absolute top-0 pl-[2vmin] leading-none">
              {/* the sky is the limt */}
              work + dicipline + focus
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AnimatedTitle;
  