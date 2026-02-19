"use client"
function loading() {
  return (
    <div className="w-full h-full fixed flex items-center justify-center ">
      <div className="w-24 h-24 border-4 border-transparent animate-spin flex items-center justify-center border-x-blue-700 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent animate-spin items-center justify-center border-x-green-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default loading;