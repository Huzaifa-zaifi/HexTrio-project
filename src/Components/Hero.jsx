export const Hero = () => {
    return (
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        
        <video
          src="/videos/elec.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 bg-black/60"></div>
  
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white font-bold uppercase tracking-wide text-4xl md:text-6xl drop-shadow-xl">
            Professional Electrical Services
          </h1>
  
          <p className="text-gray-200 mt-4 text-lg md:text-xl leading-relaxed drop-shadow-md">
            Fast, reliable and certified technicians for residential & commercial needs.
          </p>
  
          <button className="mt-8 px-10 py-3 rounded-md bg-red-800 text-black font-semibold shadow-lg hover:bg-red-400 transition duration-300">
            Get a Free Quote
          </button>
        </div>
        
      </section>
    );
  };
  