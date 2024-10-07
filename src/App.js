import React, { useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [blurValue, setBlurValue] = useState(0);
  const imgStyle = {
    filter: `blur(${blurValue}px)`,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        style={imgStyle}
        src={`${BASE_IMG_URL}`}
        alt="Doğa Resmi"
        className="rounded-lg shadow-lg transition duration-300 ease-in-out"
        width="300"
        height="200"
      />
      <input
        type="range"
        min="0"
        max="10"
        value={blurValue}
        onChange={(e) => setBlurValue(e.target.value)}
        className="mt-4 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-center mt-2">
        <span className="text-lg font-semibold">Bulanıklık: {blurValue}px</span>
      </div>
    </div>
  );
};

export default App;
