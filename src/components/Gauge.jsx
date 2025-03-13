const Gauge = ({
    value,
    size = "largem",
    showValue = true,
    color = "text-[hsla(131,41%,46%,1)]",
    bgcolor = "text-[#333]",
    fullvalue=100,
    title='title'
  }) => {
    const circumference = 332; //2 * Math.PI * 53; // 2 * pi * radius
    const valueInCircumference = (parseFloat(value) / parseFloat(fullvalue)) * circumference;
    const strokeDasharray = `${circumference} ${circumference}`;
    const initialOffset = circumference;
    const strokeDashoffset = initialOffset - valueInCircumference;
  
    const sizes = {
      small: {
        width: "36",
        height: "36",
        textSize: "text-xs",
      },
      smallm: {
        width: "120",
        height: "120",
        textSize: "text-lg",
      },
      largem: {
        width: "200",
        height: "200",
        textSize: "text-3xl",
      },
    };
  
    return (
      <div className="flex flex-col items-center justify-center relative">
        <svg
          fill="none"
          shapeRendering="crispEdges"
          height={sizes[size].height}
          width={sizes[size].width}
          viewBox="0 0 120 120"
          strokeWidth="2"
          className="transform -rotate-90"
        >
          <circle
            className={`${bgcolor}`}
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            shapeRendering="geometricPrecision"
            r="53"
            cx="60"
            cy="60"
          />
          <circle
            className={`animate-gauge_fill ${color}`}
            strokeWidth="12"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={initialOffset}
            shapeRendering="geometricPrecision"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="53"
            cx="60"
            cy="60"
            style={{
              strokeDashoffset: strokeDashoffset,
              transition: "stroke-dasharray 1s ease 0s,stroke 1s ease 0s",
            }}
          />
        </svg>
        {showValue ? (
          <div className="absolute flex  opacity-0 animate-gauge_fadeIn flex-col items-center justify-center text-gray-300 font-dmSerif">
            <p className={` text-green-500 ${sizes[size].textSize}`}>{value}/{fullvalue}</p>
            <h1 className={`  ${sizes[size].textSize}`}>{title}</h1>
          </div>
        ) : null}
      </div>
    );
  };
  export default Gauge