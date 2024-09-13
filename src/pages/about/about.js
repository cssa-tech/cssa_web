import React, { useEffect } from "react";
import "./about.css";
import img1 from './about_imgs/group_photo.jpg';
import img2 from './about_imgs/cssa_logo.jpg';
import img3 from './about_imgs/president.jpg';
import img4 from './about_imgs/contact.jpg';
import img5 from './about_imgs/contact_logo.png';



const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const speed = 0.15 * (index + 1);
        const offset = window.pageYOffset;
        section.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      {/* 海报部分 */}
      <section className="hero-section">
        <img className="hero-image" src={img1} alt="海报" />
        <img className="logo-image" src={img2} alt="Logo" />
        <div className="hero-text">
          <h1>About CSSA</h1>
          <p>Chinese Students and Scholars Association</p>
        </div>
      </section>

      {/* 文字介绍部分 */}
      <section className="text-section">
        <div className="text-content">
          <h2>关于我们</h2>
          <p>
          UIUC CSSA，全称Chinese Students and Scholars Association,　是中国人的大家庭，香槟最大的华人组织，共有成员约300人。CSSA学联致力于维护香槟地区接近6000名华人学生学者的基本权益，同时也为促进中美文化交流，以及中国学生学者与UIUC社区之间的文化，学术，与兴趣交流活动做出贡献。</p>
        </div>
      </section>

      {/* 照片部分 */}
      <section className="photo-section">
        <img className="photo-image" src={img3} alt="记录照片" />
      </section>

      {/* 照片部分 */}
      <section className="photo-section-down">
      <h2>2024 CSSA主席团</h2>
      </section>

      {/* 联系方式部分 */}
      <section className="contact-section">
        <div className="contact-content">
          {/* <img className="contact" src={img3} alt="记录照片" /> */}
          <img className="contact-image" src={img4} alt="海报" />
          {/* <h2></h2>
          <p>请在此处填写您的联系方式或相关内容。</p> */}
        </div>
      </section>
    </div>
  );
};





export default About;