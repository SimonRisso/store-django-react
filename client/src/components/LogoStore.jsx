import cascoLogo from "../assets/casco_fc.png";

export function LogoStore() {
  return (
    <div className="relative flex flex-col items-center scale-75 md:scale-75 group">
      <img src={cascoLogo} alt="logo" className="h-16 group-hover:animate-slide transform transition-transform duration-500" />

      <span className="absolute -top-3 w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:animate-slide"></span>


      <h1 className="font-audiowide font-semibold text-4xl text-blue-800 uppercase tracking-wider transform skew-x-6 text-center group-hover:animate-slide">
        Francomanía
      </h1>

      <h2 className="font-audiowide font-semibold text-2xl skew-x-6 text-pink-800 uppercase group-hover:animate-slide">
        Store
      </h2>
    </div>
  );
}
