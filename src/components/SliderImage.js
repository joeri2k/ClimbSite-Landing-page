import SimpleImageSlider from "react-simple-image-slider";
import juan from "../images/juan.jpeg";
import test from "../images/test.png";

const images = [{ url: juan }, { url: test }];

function SliderImage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <SimpleImageSlider
        width={500}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default SliderImage;
