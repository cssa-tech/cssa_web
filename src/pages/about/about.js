import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import Todo from "../../components/Todo";
import DEPARTMENTS from "../../departments";
import groupPhoto from "./about_imgs/group_photo.jpg";
import presidium from "./about_imgs/president.jpg";
import contactCard from "./about_imgs/contact_logo2.png";
import "./about.css";

const FOCUS = [
  { title: "维护权益", text: "维护香槟地区华人学生学者的基本权益，做大家在异国他乡最坚实的后盾。" },
  { title: "文化交流", text: "促进中美文化交流，搭建中国学生学者与 UIUC 社区之间沟通的桥梁。" },
  { title: "多元活动", text: "举办涵盖学术、文体、职业发展等方面的社团活动，让大学生活更精彩。" },
];

const ACCOUNTS = [
  { label: "微信公众号", value: "UIUCCSSA" },
  { label: "小红书", value: "UIUC_CSSA" },
  { label: "微博", value: "UIUC_CSSA" },
  { label: "Bilibili", value: "UIUC_CSSA" },
  { label: "Instagram", value: "uiuc_cssa", href: "https://www.instagram.com/uiuc_cssa/" },
  { label: "Facebook", value: "uiuccssa", href: "https://www.facebook.com/uiuccssa/" },
];

const About = () => (
  <div className="page about_page">
    <PageHeader title="关于我们" en="About CSSA" />

    <div className="container about_cover">
      <figure className="photo">
        <img src={groupPhoto} alt="UIUC CSSA 成员合影" />
        <figcaption>CSSA 成员合影</figcaption>
      </figure>
    </div>

    <section className="page_section">
      <div className="container about_intro">
        <p className="about_lead">在香槟的留学旅途，有 CSSA 的温暖相伴，我们不孤独。</p>
        <div className="prose">
          <p>
            UIUC CSSA，全称 Chinese Students and Scholars Association，是中国人的大家庭，香槟最大的华人组织，共有成员约 300
            人。CSSA 学联致力于维护香槟地区接近 6000 名华人学生学者的基本权益，同时也为促进中美文化交流，以及中国学生学者与
            UIUC 社区之间的文化、学术与兴趣交流活动做出贡献。
          </p>
          <p>丰富的社团和活动，给你更多元化的大学生活；无限的挑战和机会，让你跳出框架重新定义自我。</p>
        </div>
      </div>
      <div className="container about_focus">
        {FOCUS.map((f) => (
          <div className="about_focus_item" key={f.title}>
            <h3 className="sub_title">{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="page_section page_section-tint">
      <div className="container">
        <div className="block_head">
          <h2 className="block_title">主席团</h2>
        </div>
        <div className="presidium">
          <figure className="photo">
            <img src={presidium} alt="2024 CSSA 主席团合影" />
            <figcaption>2024 CSSA 主席团</figcaption>
          </figure>
          <Todo>当届主席、副主席的姓名、分工和简介</Todo>
        </div>
      </div>
    </section>

    <section className="page_section">
      <div className="container">
        <div className="block_head">
          <h2 className="block_title">组织架构</h2>
          <Link to="/apply" className="text_link">
            申请加入 <FiArrowRight />
          </Link>
        </div>
        <ul className="about_depts">
          {DEPARTMENTS.map((d) => (
            <li key={d.slug}>
              <Link to={d.to}>
                <span className="about_dept_name">{d.name}</span>
                {d.en && <span className="about_dept_en">{d.en}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="page_section page_section-tint">
      <div className="container about_contact">
        <div>
          <div className="block_head">
            <h2 className="block_title">联系我们</h2>
          </div>
          <dl className="accounts">
            <div>
              <dt>邮箱</dt>
              <dd className="selectable">uiuccssaprad@gmail.com</dd>
            </div>
            {ACCOUNTS.map((a) => (
              <div key={a.label}>
                <dt>{a.label}</dt>
                <dd>
                  {a.href ? (
                    <a href={a.href} target="_blank" rel="noreferrer">
                      {a.value}
                    </a>
                  ) : (
                    <span className="selectable">{a.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="photo about_card">
          <img src={contactCard} alt="UIUC CSSA 社交媒体账号与公众号二维码" />
          <figcaption>扫码关注 UIUC CSSA 微信公众号</figcaption>
        </figure>
      </div>
    </section>
  </div>
);

export default About;
