import banner_image_about from "../Images/banner_image_about.png";
import Banner from "../components/Banner.js";
import CollapseContentAbout from "../components/CollapseContentAbout";

function About() {
  return (
    <main>
      <div className="banner_image_about">
        <Banner imgSrc={banner_image_about} />
      </div>
      <CollapseContentAbout />
    </main>
  );
}

export default About;
