import { useState } from "react";

const QuantizedRange = ({values,value,setValue}) => {
  
  const handleChange = (event) => {
    const closest = values.reduce((prev, curr) =>
      Math.abs(curr - event.target.value) < Math.abs(prev - event.target.value) ? curr : prev
    );
    setValue(closest);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <input
        type="range"
        min={Math.min(...values)}
        max={Math.max(...values)}
        step={0.1} // Small step to ensure smooth snapping
        value={value}
        onChange={handleChange}
        className="w-full appearance-none bg-black  h-2 cursor-pointer z-10
             [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:w-4 
             [&::-webkit-slider-thumb]:h-8 
             [&::-webkit-slider-thumb]:bg-black 
             [&::-webkit-slider-thumb]: 
             [&::-moz-range-thumb]:w-4 
             [&::-moz-range-thumb]:h-4 
             [&::-moz-range-thumb]:bg-black 
             [&::-moz-range-thumb]:p"
      />
      <div className="flex justify-between w-full mx-2">
        {values.map((val) => (
          <div key={val} className="relative">
            <span
              className={`absolute top-[-22px] left-1/2 transform -translate-x-1/2 text-sm ${
                val === value ? "font-bold text-black" : "text-gray-500"
              }`}
            >
              <span className="bg-black text-black z-0">||</span>
            </span>
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default QuantizedRange;
