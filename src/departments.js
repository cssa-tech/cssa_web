// 部门数据：导航下拉菜单、主页「部门」列表、页脚和每个部门页都读这一份。
// 职业发展部、研究生部、技术部已合并为学生发展部；Locker Room 已移除。
//
// 填内容时只需要改这里，页面排版会自动跟着变：
//   intro       部门介绍（一段或多段文字）；留空则页面显示「待补充」
//   duties      主要工作（每条一句）；留空则显示「待补充」
//   activities  代表活动 { name, desc, photos: [图片] }
//   leaders     部长 { name, role, photo, bio }；留空则显示部长占位卡片
//   contact     { email, note, qr }
//   cover       页首大图（可选）

import businessCover from "./pages/business_page/business_imgs/business_group_photo.png";
import businessQR from "./pages/business_page/business_imgs/CSSA_business_contact_QR.png";
import basketballAction from "./pages/wenti_page/wenti_imgs/basketballAction.JPG";
import basketballGirl from "./pages/wenti_page/wenti_imgs/basketballGirl.JPG";
import basketballGroup from "./pages/wenti_page/wenti_imgs/basketballGroup.JPG";
import basketballGroup2 from "./pages/wenti_page/wenti_imgs/basketballGroup2.JPG";
import haoshengyin from "./pages/wenti_page/wenti_imgs/haoshengyin.JPG";
import haoshengyin2 from "./pages/wenti_page/wenti_imgs/haoshengyin2.JPG";
import fleaMarket from "./pages/wenti_page/wenti_imgs/fleaMarket.JPG";
import neiLian from "./pages/wenti_page/wenti_imgs/neiLian.JPG";

const DEPARTMENTS = [
  {
    slug: "shiwu",
    name: "事务部",
    en: "Operations",
    to: "/shiwu",
    intro: [],
    duties: [],
    activities: [],
    leaders: [],
    contact: {},
  },
  {
    slug: "media",
    name: "传媒部",
    en: "Media",
    to: "/media",
    intro: [],
    duties: [],
    activities: [],
    leaders: [],
    contact: {},
  },
  {
    slug: "business",
    name: "商业部",
    en: "Business",
    to: "/business",
    cover: businessCover,
    coverCaption: "商业部合影",
    intro: [
      "大家好！我们是 CSSA 商业部！作为 CSSA 的外联部门之一，主要负责为 CSSA 多姿多彩的活动提供资金支持。我们是唯一能够和商家有丰富沟通机会的部门，唯一合作范围全涵盖小玉米们的衣食住行，唯一能够线上线下对接商家，体验化身「商业大佬」的部门。简而言之，我们是古希腊掌管活动资金支持的神，简直泰酷啦，快来 pick 我们！",
    ],
    duties: [
      "负责与赞助商的跟进与对接工作，保证和商家长期友好的合作",
      "为 CSSA 的每次大型活动提供资金支持，并跟进每一个商家给予反馈",
      "策划和组织各类校园商业活动",
      "辅助其他部门共同完成活动",
    ],
    activities: [],
    leaders: [],
    contact: {
      email: "uiuccssabizdept@gmail.com",
      note: "商业来稿请发送至以上邮箱。投稿相关问题请回复「文稿」提取详细说明，或私信公众号。",
      qr: businessQR,
    },
  },
  {
    slug: "hr",
    name: "人力资源部",
    en: "Human Resources",
    to: "/hr",
    intro: [],
    duties: [],
    activities: [],
    leaders: [],
    contact: {},
  },
  {
    slug: "wenti",
    name: "文体部",
    en: "Arts & Sports",
    to: "/wenti",
    cover: basketballGroup,
    coverCaption: "香槟华人篮球赛",
    intro: [
      "在文体部，我们举办的活动丰富多彩，极具吸引力。文体部负责的艺术与体育活动，如香槟华人篮球赛和香槟好声音，为热爱运动和音乐的同学提供了展示自己的绝佳机会。这些活动不仅受到高度好评，也强化了社区的凝聚力。",
    ],
    duties: [],
    activities: [
      {
        name: "香槟华人篮球赛",
        desc: "为热爱运动的同学提供展示自己的绝佳机会",
        photos: [basketballAction, basketballGirl, basketballGroup2],
      },
      {
        name: "香槟好声音",
        desc: "属于华人学生学者的歌唱舞台",
        photos: [haoshengyin, haoshengyin2],
      },
      { name: "跳蚤市场", desc: "闲置好物流转起来，认识更多新朋友", photos: [fleaMarket] },
      { name: "内联活动", desc: "增进部门之间的凝聚力与合作", photos: [neiLian] },
    ],
    leaders: [],
    contact: {},
  },
  {
    slug: "wenlian",
    name: "文联部",
    en: "",
    to: "/wenlian",
    intro: [],
    duties: [],
    activities: [],
    leaders: [],
    contact: {},
  },
  {
    slug: "studentDev",
    name: "学生发展部",
    en: "Student Development",
    to: "/studentDev",
    note: "由原职业发展部、研究生部、技术部合并而成。",
    intro: [],
    duties: [],
    activities: [],
    leaders: [],
    contact: {},
  },
];

export const getDepartment = (slug) => DEPARTMENTS.find((d) => d.slug === slug);

export default DEPARTMENTS;
