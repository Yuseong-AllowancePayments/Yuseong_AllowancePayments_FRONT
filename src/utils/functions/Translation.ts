import { excelFileType, excelTabType } from "../../models/request";

/** 엑셀 type */
export const excelTypes: Record<string, excelFileType> = {
    "참전유공자 명예 수당": "WAR_VETERAN",
    "참전유공자 배우자 수당": "WAR_VETERAN_SPOUSE",
    "보훈 예우 수당": "HONORABLE_ALLOWANCE",
    "동행정 PIN": "PINCODE",
};

/** 엑셀 탭 type */
export const excelTabTypes: Record<string, excelTabType> = {
    "대상자 현황": "paymentTargetTab",
    현금지급: "cashPaymentTab",
    신규자: "newComerTab",
    지급중지자: "paymentStoppedTab",
};
