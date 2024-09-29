import React, { useEffect } from "react";
import "./business.css";  // Import your CSS file
import groupImage from './business_imgs/business_group_photo.png';
import contactQR from './business_imgs/CSSA_business_contact_QR.png'

const Business = () => {
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
    <div className="business-page">
      <section className="business-title-section">
      <img className="business-title-image" src={groupImage} />
        {/* <img src="business" alt="Top Image" className="hero-image" /> */}
        <div className="business-title-text">
          <h1>商业部</h1>
          <h2>CSSA Business</h2>
        </div>
      </section>

      <section className="business-text-section">
        <div className="business-text-content">
          <h2>关于商业部</h2>
          <p>大家好！我们是cssa商业部！作为cssa的外联部门之一，主要负责为cssa多姿多彩的活动提供资金支持。我们是唯一能够和商家有丰富沟通机会的部门,唯一合作范围全涵盖小玉米们的衣食住行，唯一能够线上线下对接商家，体验化身“商业大佬”的部门.简而言之，我们是古希腊掌管活动资金支持的神，简直泰酷啦，快来pick我们！</p>
          
        </div>
        <div className="business-text-content">
          <h2>工作介绍</h2>
          <p>商业部主要负责与赞助商的跟进与对接工作，保证和商家的长期友好的合作。商业部会为cssa的每次大型活动提供资金支持并且跟进每一个商家给予反馈。此外，作为全能选手，我们还负责策划和组织各类校园商业活动，辅助其他部门共同完成活动。</p>
        </div>
      </section>

      <section className="leader-section">
        <div className="leader-text">
          <h1>部长介绍</h1>
          {/* 加入部长信息 */}
          <p>加入部长照片和介绍</p>
        </div>
       
      </section>

      <section className="business-contact-section">
        <div className="business-contact-content">
          <h2>联系信息</h2>
          <img className="business-contact-image" src={contactQR}></img>
          <p>商业来稿请发送至uiuccssabizdept@gmail.com, 投稿相关问题请回复‘文稿’提取详细说明或私信公众号</p>
          {/* <p>欢迎联系我们获取更多信息！</p> */}
        </div>
      </section>
    </div>
  );
};

export default Business;
