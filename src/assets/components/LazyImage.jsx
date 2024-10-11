import React, { useState } from "react";

function LazyImage({ src, alt, placeholder, width, className }) {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div>
      {!isLoad && (
        <img
          src={placeholder}
          alt="Loading..."
          width={width}
          className={className}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        className={`${className} ${!isLoad ? "hidden" : ""}`}
        onLoad={() => setIsLoad(true)}
      />
    </div>
  );
}

export default LazyImage;
