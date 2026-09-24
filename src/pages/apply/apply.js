import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import Todo from "../../components/Todo";
import DEPARTMENTS from "../../departments";
import "./apply.css";

// TODO: 招新开放后，把报名表链接填在这里；留空时页面显示「待补充」
const APPLY_FORM_URL = "";

const Apply = () => (
  <div className="page apply_page">
    <PageHeader
      title="加入我们"
      en="Join CSSA"
      lead="欢迎每一位想为香槟华人社区出一份力的你。先看看各部门在做什么，再选择你感兴趣的方向。"
    />

    <section className="page_section">
      <div className="container apply_grid">
        <div>
          <h2 className="dept_label_like">申请方式</h2>
          {APPLY_FORM_URL ? (
            <a className="btn btn-dark" href={APPLY_FORM_URL} target="_blank" rel="noreferrer">
              填写报名表 <FiArrowRight />
            </a>
          ) : (
            <Todo>招新时间、报名表链接和面试安排</Todo>
          )}
        </div>
        <div>
          <h2 className="dept_label_like">为什么加入</h2>
          <Todo>加入 CSSA 能得到什么：认识的朋友、锻炼的能力、参与的活动</Todo>
        </div>
      </div>
    </section>

    <section className="page_section page_section-tint">
      <div className="container">
        <div className="block_head">
          <h2 className="block_title">选择部门</h2>
        </div>
        <ul className="apply_depts">
          {DEPARTMENTS.map((d) => (
            <li key={d.slug}>
              <Link to={d.to} className="apply_dept">
                <span>
                  <span className="apply_dept_name">{d.name}</span>
                  {d.en && <span className="apply_dept_en">{d.en}</span>}
                </span>
                <span className="apply_dept_more">
                  部门介绍 <FiArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="page_section">
      <div className="container">
        <div className="block_head">
          <h2 className="block_title">常见问题</h2>
        </div>
        <div className="apply_faq">
          <Todo>研究生、访问学者可以加入吗？</Todo>
          <Todo>可以同时申请多个部门吗？</Todo>
          <Todo>每周大概需要投入多少时间？</Todo>
        </div>
      </div>
    </section>
  </div>
);

export default Apply;
