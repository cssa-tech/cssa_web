import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";
import DEPARTMENTS from "../departments";
import groupPhoto from "./about/about_imgs/group_photo.jpg";
import basketballAction from "./wenti_page/wenti_imgs/basketballAction.JPG";
import haoshengyin from "./wenti_page/wenti_imgs/haoshengyin2.JPG";
import fleaMarket from "./wenti_page/wenti_imgs/fleaMarket.JPG";
import neiLian from "./wenti_page/wenti_imgs/neiLian.JPG";

const FOCUS = [
  { title: "维护权益", text: "维护香槟地区华人学生学者的基本权益，做大家在异国他乡最坚实的后盾。" },
  { title: "文化交流", text: "促进中美文化交流，搭建中国学生学者与 UIUC 社区之间沟通的桥梁。" },
  { title: "多元活动", text: "举办涵盖学术、文体、职业发展等方面的社团活动，让大学生活更精彩。" },
];

const FEATURED = [
  { name: "香槟华人篮球赛", desc: "为热爱运动的同学提供展示自己的绝佳机会", img: basketballAction, to: "/wenti" },
  { name: "香槟好声音", desc: "属于华人学生学者的歌唱舞台", img: haoshengyin, to: "/wenti" },
  { name: "跳蚤市场", desc: "闲置好物流转起来，认识更多新朋友", img: fleaMarket, to: "/wenti" },
  { name: "内联活动", desc: "增进部门之间的凝聚力与合作", img: neiLian, to: "/hr" },
];

const MORE_EVENTS = ["新生见面会", "学校游园", "美食节", "传统节日宣传", "中秋晚会", "春晚"];

const Home = () => {
  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero_media" aria-hidden="true" />
        <div className="container hero_inner">
          <h1 className="hero_title">
            伊利诺伊大学香槟分校
            <br />
            中国学生学者联合会
          </h1>
          <p className="hero_en">Chinese Students and Scholars Association at UIUC</p>
          <div className="hero_actions">
            <Link to="/events" className="btn btn-light">
              近期活动
            </Link>
            <Link to="/apply" className="hero_link">
              加入我们 <FiArrowRight />
            </Link>
          </div>
        </div>
        <span className="hero_credit">Alma Mater · Urbana, Illinois</span>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="intro">
        <div className="container intro_grid">
          <p className="intro_lead">
            香槟最大的华人学生组织，约 <strong>300</strong> 名成员，服务着这里近 <strong>6000</strong> 名华人学生学者。
          </p>
          <div className="intro_body">
            <p>
              UIUC CSSA，全称 Chinese Students and Scholars Association，是中国人的大家庭。学联致力于维护香槟地区华人学生学者的基本权益，同时为促进中美文化交流，以及中国学生学者与
              UIUC 社区之间的文化、学术与兴趣交流做出贡献。
            </p>
            <Link to="/about" className="text_link">
              关于 CSSA <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Photo + what we do ---------- */}
      <section className="focus">
        <div className="container">
          <figure className="focus_figure">
            <img src={groupPhoto} alt="UIUC CSSA 成员合影" className="focus_img" />
            <figcaption>CSSA 成员合影</figcaption>
          </figure>
          <div className="focus_list">
            {FOCUS.map((f) => (
              <div className="focus_item" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section className="activities">
        <div className="container">
          <div className="block_head">
            <h2 className="block_title">我们的活动</h2>
            <Link to="/events" className="text_link">
              查看活动日历 <FiArrowRight />
            </Link>
          </div>
          <div className="gallery">
            {FEATURED.map((a) => (
              <Link to={a.to} className="gallery_item" key={a.name}>
                <div className="gallery_frame">
                  <img src={a.img} alt={a.name} className="gallery_img" loading="lazy" />
                </div>
                <h3 className="gallery_name">{a.name}</h3>
                <p className="gallery_desc">{a.desc}</p>
              </Link>
            ))}
          </div>
          <p className="more_events">
            每年还有{MORE_EVENTS.join("、")}等活动。
          </p>
        </div>
      </section>

      {/* ---------- Departments ---------- */}
      <section className="departments">
        <div className="container dept_layout">
          <div>
            <h2 className="block_title">部门</h2>
            <p className="dept_note">CSSA 由 {DEPARTMENTS.length} 个部门组成，各自负责活动、宣传、外联与成员服务。</p>
            <Link to="/apply" className="btn btn-dark">
              申请加入
            </Link>
          </div>
          <ul className="dept_list">
            {DEPARTMENTS.map((d) => (
              <li key={d.to}>
                <Link to={d.to} className="dept_row">
                  <span className="dept_name">{d.name}</span>
                  {d.en && <span className="dept_en">{d.en}</span>}
                  <FiArrowRight className="dept_arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Home;
