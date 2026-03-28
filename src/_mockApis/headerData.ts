// project imports

import type {
  notificationType,
  profileType,
} from "../types/HeaderTypes";
//
// Notification
//


const notifications: notificationType[] = [
  {
    title: "新设备接入",
    subtitle: "温湿度传感器已成功连接",
  },
  {
    title: "环境数据更新",
    subtitle: "农田温湿度数据已刷新",
  },
  {
    title: "异常预警",
    subtitle: "检测到土壤湿度过低，请及时处理",
  },
  {
    title: "AI识别完成",
    subtitle: "作物叶片病害识别已完成",
  },
  {
    title: "系统通知",
    subtitle: "今日数据分析报告已生成",
  },
];


//
// Profile
//



const profileDD: profileType[] = [
  {
    title: "我的资料",
    subtitle: "Account settings",
    url: "/user-profile",
    img: "tabler:user",
  },
  {
    title: "我的账户",
    subtitle: "My Daily Notes",
    url: "/",
    img: "tabler:mail",
  },
  {
    title: "我的任务",
    subtitle: "To-do and Daily tasks",
    url: "/",
    img: "tabler:list-check",
  },
];




export {
  notifications,
  profileDD,



};
