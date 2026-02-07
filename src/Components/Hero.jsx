import Features from "./Features";
function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto text-white font-sans">
        <div className="mt-50 flex-col gap-5">
          <h1 className="text-4xl font-black text-left">
            Track Your Portfolio
          </h1>
          <h1 className="text-4xl font-black text-left">
            Make Smarter Decisions
          </h1>
          <p className="text-sm text-text-secondary font-bold mt-1">
            All your investments in one place with Real-time insights
          </p>
          <div className="flex gap-5">
            <button className="px-6 py-1  bg-linear-to-r from-purple-500 to-pink-500  text-white mt-5 text-bold font-sans cursor-pointer rounded-[5px] shadow-[0_0_25px_rgba(255,87,255,0.8)]  hover:scale-105 duration-300 ">
              Get Started
            </button>
            <button className="px-6 py-1 bg-zinc-800  text-text-secondary mt-5 text-bold font-sans cursor-pointer rounded-[5px] hover:scale-105 duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] ">
              Demo
            </button>
          </div>
          <p className="mt-2 text-xs text-text-secondary">
            No credit card • 30 sec
          </p>
        </div>
        <div className="flex gap-4 w-full justify-center items-center">
          <img
            src="/images/Hero.png"
            alt=""
            className="w-[40%] rounded-2xl -z-20"
          />
          <img
            src="/images/Hero-2.png"
            alt=""
            className="w-[40%] mt-20 rounded-2xl -z-20"
          />
        </div>
      </div>
      <Features />
    </section>
  );
}

export default Hero;
