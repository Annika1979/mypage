import Collage from "../img/Collage.jpg";
console.log(Collage);
const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <h2>This is my family</h2>
      <img src={Collage}></img>
    </div>
  );
};

export default About;
