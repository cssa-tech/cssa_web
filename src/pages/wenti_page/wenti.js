import React, { useEffect } from "react";
import "./wenti.css";  // Import your CSS file
// import groupImage from './business_imgs/business_group_photo.png';
// import contactQR from './business_imgs/CSSA_business_contact_QR.png'
import basketballAction from './wenti_imgs/basketballAction.JPG'
import basketballGirl from './wenti_imgs/basketballGirl.JPG'
import basketballGroup from './wenti_imgs/basketballGroup.JPG'
import basketballGroup2 from './wenti_imgs/basketballGroup2.JPG'
import haoshengyin from './wenti_imgs/haoshengyin.JPG'
import haoshengyin2 from './wenti_imgs/haoshengyin2.JPG'
import fleaMarket from './wenti_imgs/fleaMarket.JPG'
import neiLian from './wenti_imgs/neiLian.JPG'
const Wenti = () => {
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
    <div className="wenti-page">
      <section className="wenti-title-section">
      {/* <img className="business-title-image" src={groupImage} /> */}
        {/* <img src="business" alt="Top Image" className="hero-image" /> */}
        <div className="business-title-text">
          <h1>文体部</h1>
          <h2>CSSA Culture and Sports</h2>
        </div>
      </section>

      <section className="wenti-text-section">
        <div className="wenti-text-content">
          <h2>关于文体部</h2>
          <p>在文体部，我们举办的活动丰富多彩，极具吸引力。文体部门负责的艺术与体育活动，如香槟华人篮球赛和香槟好声音，为热爱运动和音乐的同学提供了展示自己的绝佳机会。这些活动不仅受到高度好评，也强化了社区的凝聚力。</p>
         </div> 
      </section>

      <section className="wenti-leader-section">
        <div className="wenti-text-content">
          <h2>活动介绍</h2>
          <h3>香槟华人篮球赛</h3>
            <img className="wenti-activity-image-vertical" src={basketballAction} />
            <img className="wenti-activity-image-vertical" src={basketballGirl} />
            <div className="wenti-activity-image-container">
                <img className="wenti-activity-image-horizontal" src={basketballGroup} />
                <img className="wenti-activity-image-horizontal" src={basketballGroup2} />
            </div>
          <h3>香槟好声音</h3>
            <img className="wenti-activity-image-horizontal" src={haoshengyin} />
            <img className="wenti-activity-image-horizontal" src={haoshengyin2} />
          <h3>跳蚤市场</h3>
            <img className="wenti-activity-image-horizontal" src={fleaMarket} />
          <h3>内联活动</h3>
            <img className="wenti-activity-image-horizontal" src={neiLian} />
        </div>
      </section>

      
    </div>
  );
};

export default Wenti;
