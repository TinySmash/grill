function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-44 md:w-64 xl:w-72 flex flex-col gap-[2px]">
        <div className="burger-loading-1 w-full h-4 md:h-10 xl:h-20 bg-primary rounded-t-full"></div>
        <div className="burger-loading-2 w-full h-4 md:h-10 xl:h-20 bg-[#853000] rounded-full"></div>
        <div className="burger-loading-3 w-full h-4 md:h-10 xl:h-20 bg-primary rounded-b-full"></div>
      </div>
    </div>
  );
}

export default Loading;
