import Typewriter from 'react-typewriter-effect';
import '../styles/Hero.css';
import img1 from '../assets/avatar.png';
// import image from '../assets

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
          <span className="accent-text">SHASWAT</span> MISHRA
            
          </h1>
          <h2>WEB AND AI EXPERT</h2>
          <p>
          <Typewriter
              textStyle={{
                fontFamily: 'inherit',
                color: '#fff',
                fontWeight: '',
                fontSize: '1.25rem',
              }}
             startDelay={100}
             cursorColor="#3F3D56"
             multiText={[
               ' Trary to popular belief, Lorem Ipsum is not simply random text.    ',
             ]}
             multiTextDelay={500}
             typeSpeed={50}
             hideCursorAfterText={false}
           />
           
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src = {img1} alt="Profile" />
          {/* <img src="" alt="Profile" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
