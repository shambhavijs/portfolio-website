import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.homePageWrapper}>
      {/* <Image src='/bg.png' width={100} height={100} unoptimized={true} className={styles.bgImage}/> */}
      <section className={styles.heroSectionWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.title}>I am Shambhavi,
            <div className={styles.glitchWrapper}>
              <p className={styles.glitch} data-glitch="Frontend Developer">Frontend Developer</p>
            </div>
          </div>
          <p className={styles.tagline}>Crafting beautiful and functional websites, one line of code at a time and creating seamless user experiences through front-end development.</p>
        </div>
        <div className={styles.navbar} data-aos="fade-left" data-aos-duration="200">
          <div className={styles.navlink}><Link href="#projects-section">Work</Link></div>
          <div className={styles.navlink}><Link href="#about-section">About</Link></div>
          <div className={styles.navlink}><Link href="#contact-section">Contact</Link></div>
        </div>  
      </section>

      <div className={styles.heading} data-aos="fade-up" data-aos-duration="1200">SKILLS</div>
        <div className={styles.skillWrapper}> 
          <div className={styles.carousel}>
            <p className={styles.skillName}>HTML</p>
            <p className={styles.skillName}>CSS</p>
            <p className={styles.skillName}>JavaScript</p>
            <p className={styles.skillName}>ReactJS</p>
            <p className={styles.skillName}>GraphQL</p>
            <p className={styles.skillName}>Redux</p>
            <p className={styles.skillName}>Tailwind</p>
            <p className={styles.skillName}>SEO</p>
            <p className={styles.skillName}>Website Performance</p>
            <p className={styles.skillName}>AntDesign</p>
          </div>
      </div>
      <section id='projects-section' class='py-4'>
        <div className={styles.projects} >
          <p className={styles.sectionTitle} data-aos="fade-up" data-aos-duration="600">Work</p>
          <p className={styles.designation} data-aos="fade-up" data-aos-duration="1000">Frontend Developer at Commutatus</p>
          <p className={styles.duration} data-aos="fade-up" data-aos-duration="1100">2021-2023</p>
          <div className={styles.projectWrapper} data-aos="fade-up" data-aos-duration="1800">
            <div className={styles.projectCard}>
              <Image src='/banner-unschool.webp' width={80} height={80} unoptimized={true} className={styles.image} alt="logo"/>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>Unschool LMS</p>
                <p className={styles.techStack}>NextJS, Redux, Apollo GraphQL, AntDesign</p>
                <button><a href="https://www.unschool.in/">Visit Website</a></button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image src='/mentormind.webp' width={80} height={80} unoptimized={true} className={styles.image} alt="logo"/>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>MentorMind</p>
                <p className={styles.techStack}>Slim, Bootstrap, RoR</p>
                <button><a href="https://www.mentormind.in/">Visit Website</a></button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image src='/binit.jpg' width={80} height={80} unoptimized={true} className={styles.image} alt="logo"/>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>BinIt</p>
                <p className={styles.techStack}>NextJS, TypeScript, Apollo GraphQL, Redux</p>
                <button><a href="https://binit.ai/">Visit Website</a></button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image src='/worl-protests.webp' width={80} height={80} unoptimized={true} className={styles.image} alt="logo"/>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>World Protests</p>
                <p className={styles.techStack}>NextJS, Rematch, AWS, Highcharts</p>
                <button><a href="https://www.worldprotests.org/">Visit Website</a></button>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image src='/daily9-logo.png' width={80} height={80} unoptimized={true} className={styles.image} alt="logo"/>
              <div className={styles.projectDetails}>
                <p className={styles.projectName}>Daily9 Mobile App</p>
                <p className={styles.techStack}>React Native, Android Studio, XCode</p>
                <button><a href="https://apps.apple.com/in/app/daily9/id1193946897">Visit App Store</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='about-section' class='py-4'>
        <div className={styles.about} data-aos="fade-up" data-aos-duration="700">
          <p className={styles.sectionTitle}>About</p>
          <div className={styles.aboutWrapper}>
            <p className={styles.bio} data-aos="fade-right" data-aos-duration="1200">
              Hey, my name is Shambhavi and I live in India. I'm a frontend developer who enjoys making cool and useful web apps with ReactJS and other modern technologies. 
              I've been doing this for 2 years and I've worked on some awesome websites for different clients and niches. <br></br><br></br>
              I know how to use HTML, CSS, JavaScript, and ReactJS, as well as some handy tools like Git, Webpack, and Tailwind. 
              I also have experience with NextJS and GraphQL, which are great for building fast and scalable web apps. <br></br><br></br>
              I'm always up for learning new stuff and trying out new technologies and frameworks to level up my skills and create awesome products.
            </p>
            <div className={styles.overlay} data-aos="fade-left" data-aos-duration="1200"></div>
            
          </div>
        </div>
      </section>
      <section id='contact-section' className={styles.contact}>
        <div className={styles.contactWrapper}>
          <div className={styles.leftSection} data-aos="zoom-in" data-aos-duration="800">
            Let's
            <div className={styles.contactHeading}> work together!</div>
          </div>
          <div className={styles.mailSection} data-aos="fade-right" data-aos-duration="1000">
            <p>If you want to chat with me or learn more about my skills, just shoot me an email at
            <a href="mailto:shambhavi6198@gmail.com" className={styles.emailid}>shambhavi6198@gmail.com</a>
            I’m always up for meeting new people and exploring new possibilities.</p>
          </div>
          <div className={styles.socialMedia} data-aos="fade-up" data-aos-duration="1100">
            <a href="https://www.linkedin.com/in/shambhavi6/"><Image src='/linkedin.png' width={35} height={35} className={styles.socialLogo} alt="logo"/></a>
            <a href="https://github.com/shambhavijs"><Image src='/github.png' width={35} height={35} className={styles.socialLogo} alt="logo"/></a>
          </div>
        </div>
      </section>
    </div>
  )
}
