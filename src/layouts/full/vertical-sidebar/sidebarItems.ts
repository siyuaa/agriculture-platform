export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  children?: menu[];
}

const sidebarItem: menu[] = [
  // ===== 顶部 =====
  { header: "系统菜单" },

  {
    title: "首页",
    icon: "home-smile-linear",
    to: "/",
  },

  // ===== 农业功能 =====
  { header: "农业监测" },

  {
    title: "环境监测",
    icon: "mdi-weather-partly-cloudy",
    to: "/mode",
  },
  {
    title: "设备控制",
    icon: "mdi-toggle-switch",
    to: "/switch",
  },
  {
    title: "AI检测助手",
    icon: "mdi-robot",
    to: "/ai",
  },

  // ===== 数据分析 =====
  { header: "数据分析" },

  {
    title: "温湿度变化",
    icon: "mdi-chart-line",
    to: "/charts/temp",
  },
  {
    title: "作物生长趋势",
    icon: "mdi-sprout",
    to: "/charts/growth",
  },

  // ===== 系统管理 =====
  { header: "系统管理" },

  {
    title: "用户管理",
    icon: "mdi-account",
    to: "/user-profile",
  },
  {
    title: "系统设置",
    icon: "mdi-cog",
    to: "/settings",
  }
];

export default sidebarItem;