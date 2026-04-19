import { memo, useEffect, useState } from "react";
import brandPattern from "../../assets/brand-pattern.svg";

const Image = memo(function Image({
  alt,
  className = "",
  fallbackSrc = brandPattern,
  imgClassName = "",
  priority = false,
  src,
  wrapperClassName = "",
  ...props
}) {
  const [activeSrc, setActiveSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setActiveSrc(src);
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName} ${className}`}>
      {!isLoaded ? <div className="absolute inset-0 animate-pulse bg-white/8" aria-hidden="true" /> : null}
      <img
        {...props}
        alt={alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        onError={() => {
          if (activeSrc !== fallbackSrc) {
            setActiveSrc(fallbackSrc);
            return;
          }

          setIsLoaded(true);
        }}
        onLoad={() => setIsLoaded(true)}
        src={activeSrc}
        className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
    </div>
  );
});

export default Image;
