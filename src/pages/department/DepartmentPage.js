import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import Todo from "../../components/Todo";
import DEPARTMENTS, { getDepartment } from "../../departments";
import "./department.css";

/**
 * One template for every department page. Content comes from src/departments.js;
 * anything left empty there shows a dashed "待补充" box so the layout stays complete.
 */
const DepartmentPage = ({ slug }) => {
  const dept = getDepartment(slug);
  if (!dept) return null;

  const others = DEPARTMENTS.filter((d) => d.slug !== slug);
  const { intro = [], duties = [], activities = [], leaders = [], contact = {} } = dept;
  const hasContact = contact.email || contact.note || contact.qr;

  return (
    <div className="page dept_page">
      <PageHeader title={dept.name} en={dept.en} lead={dept.note} />

      {dept.cover && (
        <div className="container dept_cover">
          <figure className="photo">
            <img src={dept.cover} alt={dept.coverCaption || dept.name} />
            {dept.coverCaption && <figcaption>{dept.coverCaption}</figcaption>}
          </figure>
        </div>
      )}

      {/* ---------- About + duties ---------- */}
      <section className="page_section">
        <div className="container dept_about">
          <div>
            <h2 className="dept_label">部门介绍</h2>
            {intro.length ? (
              <div className="prose">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              <Todo>用两三句话介绍{dept.name}是做什么的、适合什么样的同学加入。</Todo>
            )}
          </div>
          <div>
            <h2 className="dept_label">主要工作</h2>
            {duties.length ? (
              <ul className="duty_list">
                {duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ) : (
              <Todo>列出 3–5 项{dept.name}的日常工作。</Todo>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Activities ---------- */}
      <section className="page_section page_section-tint">
        <div className="container">
          <div className="block_head">
            <h2 className="block_title">代表活动</h2>
          </div>
          {activities.length ? (
            <div className="act_list">
              {activities.map((a) => (
                <article className="act_row" key={a.name}>
                  <div className="act_text">
                    <h3 className="sub_title">{a.name}</h3>
                    {a.desc && <p>{a.desc}</p>}
                  </div>
                  <div className={`act_photos act_photos-${Math.min(a.photos.length, 3)}`}>
                    {a.photos.slice(0, 3).map((src, i) => (
                      <div className="act_frame" key={i}>
                        <img src={src} alt={`${a.name} ${i + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="act_todo">
              {[1, 2, 3].map((n) => (
                <Todo key={n} className="act_todo_item">
                  活动名称、一句话介绍和 1–3 张照片
                </Todo>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- Leaders ---------- */}
      <section className="page_section">
        <div className="container">
          <div className="block_head">
            <h2 className="block_title">部长介绍</h2>
          </div>
          <div className="leader_grid">
            {leaders.length
              ? leaders.map((l) => (
                  <article className="leader" key={l.name}>
                    <div className="leader_photo">{l.photo && <img src={l.photo} alt={l.name} />}</div>
                    <h3 className="leader_name">{l.name}</h3>
                    {l.role && <p className="leader_role">{l.role}</p>}
                    {l.bio && <p className="leader_bio">{l.bio}</p>}
                  </article>
                ))
              : ["部长", "副部长"].map((role) => (
                  <article className="leader" key={role}>
                    <Todo className="leader_photo leader_photo-todo">照片</Todo>
                    <h3 className="leader_name leader_name-todo">姓名</h3>
                    <p className="leader_role">{role}</p>
                    <p className="leader_bio leader_bio-todo">专业、年级和一句话介绍</p>
                  </article>
                ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="page_section page_section-tint">
        <div className="container dept_contact">
          <div>
            <h2 className="block_title">联系我们</h2>
            {hasContact ? (
              <div className="contact_body">
                {contact.email && <p className="contact_email">{contact.email}</p>}
                {contact.note && <p className="contact_note">{contact.note}</p>}
              </div>
            ) : (
              <Todo style={{ marginTop: "1.5rem" }}>部门邮箱、微信或其他联系方式</Todo>
            )}
          </div>
          {contact.qr && (
            <figure className="photo contact_qr">
              <img src={contact.qr} alt={`${dept.name}联系二维码`} />
              <figcaption>扫码联系{dept.name}</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* ---------- Other departments ---------- */}
      <section className="page_section">
        <div className="container">
          <div className="block_head">
            <h2 className="block_title">其他部门</h2>
            <Link to="/apply" className="text_link">
              申请加入 <FiArrowRight />
            </Link>
          </div>
          <ul className="other_depts">
            {others.map((d) => (
              <li key={d.slug}>
                <Link to={d.to}>
                  {d.name}
                  <FiArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DepartmentPage;
