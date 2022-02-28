import SimpleImageSlider from "react-simple-image-slider";
import s1 from "../images/screen1.png";
import s2 from "../images/screen2.png";
import s3 from "../images/screen3.png";
import s4 from "../images/screen4.png";
import s5 from "../images/screen5.png";
import s6 from "../images/screen6.png";

const images = [
  { url: s1 },
  { url: s2 },
  { url: s3 },
  { url: s4 },
  { url: s5 },
  { url: s6 },
];

function SliderImage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        <h1 style={{ color: "white ", textAlign: "center" }}>
          Explore new crags, and meet new climbers.
        </h1>
      </div>

      <SimpleImageSlider
        width={200}
        height={433}
        images={images}
        showNavs={true}
        navSize={20}
        navStyle={2}
        loop={true}
        navMargin={0}
      />
    </div>
  );
}

export default SliderImage;
