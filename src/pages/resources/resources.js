import React from "react";
import PageHeader from "../../components/PageHeader";
import Todo from "../../components/Todo";
import "./resources.css";

// 资源分类框架：每一类填 items（{ title, desc, href }）后，对应的「待补充」框会被替换成列表。
const CATEGORIES = [
  { title: "新生指南", hint: "落地、注册、选课、办卡等新生入学步骤", items: [] },
  { title: "生活信息", hint: "租房、交通、购物、医疗保险等生活资讯", items: [] },
  { title: "学业资源", hint: "学校图书馆、辅导中心、选课和学术支持", items: [] },
  { title: "职业发展", hint: "实习求职、校园招聘会、简历与面试准备", items: [] },
  { title: "身份与安全", hint: "签证、国际学生办公室、校园安全信息", items: [] },
  { title: "常用链接", hint: "UIUC 与香槟地区常用网站", items: [] },
];

const Resources = () => (
  <div className="page resources_page">
    <PageHeader
      title="资源分享"
      en="Resources"
      lead="CSSA 整理的在香槟学习和生活的实用信息，持续更新中。"
    />
    <section className="page_section">
      <div className="container res_grid">
        {CATEGORIES.map((c) => (
          <div className="res_cat" key={c.title}>
            <h2 className="sub_title res_title">{c.title}</h2>
            {c.items.length ? (
              <ul className="res_list">
                {c.items.map((it) => (
                  <li key={it.title}>
                    {it.href ? (
                      <a href={it.href} target="_blank" rel="noreferrer">
                        {it.title}
                      </a>
                    ) : (
                      <span>{it.title}</span>
                    )}
                    {it.desc && <p>{it.desc}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <Todo>{c.hint}</Todo>
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Resources;
