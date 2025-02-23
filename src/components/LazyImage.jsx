import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const LazyImage = (props) => {
  const { alt, src, className } = props;
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        height={"100%"}
        src={src}
        width={"100%"}
        effect="opacity"
        className={className}
      />
    </div>
  );
};

export default LazyImage;
