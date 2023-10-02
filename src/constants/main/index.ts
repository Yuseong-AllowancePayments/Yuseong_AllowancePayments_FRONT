export interface TabItemType {
  tabItem: string;
  title: string;
}

export const TabItemInfo: TabItemType[] = [
  {
    tabItem: "참전유공자 명예 수당",
    title: "참전유공자 명예 수당 지급 대상자 조회",
  },
  {
    tabItem: "참전유공자 배우자 수당",
    title: "참전유공자 배우자 수당 지급 대상자 조회",
  },
  {
    tabItem: "보훈 예우 수당",
    title: "참전유공자 보훈 예우 수당 지급 대상자 조회",
  },
];

export interface ExcelTabItemType {
  tabItem: string;
}

export const ExcelTabItemInfo: ExcelTabItemType[] = [
  {
    tabItem: "대상자 현황",
  },
  {
    tabItem: "현금 지급",
  },
  {
    tabItem: "신규자",
  },
  {
    tabItem: "지급중지자",
  },
];
