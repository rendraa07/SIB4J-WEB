export default function learnpage() {
    return (
         <div className="bg-gray-100 min-h-screen p-10 flex items-center justify-center">
      
      <div className="max-w-5xl w-full">

        <div className="grid grid-cols-2 gap-6 mb-6">
          
          <div className="bg-blue-100 p-8 rounded-2xl">
            <img src={"/palette.svg"} alt="icon palette" />
            <p className="text-sm text-gray-600">Design</p>
            <h1 className="text-2xl font-bold text-blue-900 mt-6">
              Adobe Photoshop
            </h1>
            <p className="text-sm text-gray-600 mt-2">in 3 days</p>
          </div>

          <div className="bg-green-100 p-8 rounded-2xl">
            <img src={"/prompt.svg"} alt="icon prompt" />
            <p className="text-sm text-gray-600">AI</p>
            <h1 className="text-lg font-bold mt-6 text-green-950">
              DALL·E 2, Midjourney, Stable Diffusion
            </h1>
            <p className="text-sm text-gray-600 mt-2">in 5 days</p>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-purple-100 p-6 rounded-2xl">
            <img src={"/palette.svg"} alt="icon palette" />
            <p className="text-sm text-gray-600">Design</p>
            <h1 className="font-bold text-lg mt-4 text-purple-900">Figma</h1>
            <p className="text-sm text-gray-600 mt-2">8 hours ago</p>
          </div>

          <div className="bg-orange-100 p-6 rounded-2xl">
            <img src={"/code.svg"} alt="icon code" />
            <p className="text-sm text-gray-600">Coding</p>
            <h1 className="font-bold text-lg mt-4 text-orange-900">Python</h1>
            <p className="text-sm text-gray-600 mt-2">2 days ago</p>
          </div>

          <div className="bg-pink-100 p-6 rounded-2xl">
            <img src={"/palette.svg"} alt="icon palette" />
            <p className="text-sm text-gray-600">Design</p>
            <h1 className="font-bold text-lg mt-4 text-pink-900">Sketch</h1>
            <p className="text-sm text-gray-600 mt-2">4 days ago</p>
          </div>

          <p className="absolute bottom-6 right-10 text-sm text-gray-400">
  Day 020 / 365
</p>

        </div>

      </div>

    </div>
        
    );
}