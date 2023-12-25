import {
    cashPaymentTabType,
    newComerTabType,
    paymentStoppedTabType,
    paymentTargetTabType,
} from "../response";

export type excelFileType =
    | "WAR_VETERAN"
    | "WAR_VETERAN_SPOUSE"
    | "HONORABLE_ALLOWANCE"
    | "PINCODE";

export type excelTabType =
    | "paymentTargetTab"
    | "cashPaymentTab"
    | "newComerTab"
    | "paymentStoppedTab";

export interface userLoginRequestDto {
    accountId: string;
    password: string;
}

export interface editExcelTargetRequestDto {
    excelLine: Omit<paymentTargetTabType, "id">;
    refetch: () => void;
    id: number;
}

export interface editExcelCashRequestDto {
    excelLine: Omit<cashPaymentTabType, "id">;
    refetch: () => void;
    id: number;
}

export interface editExcelNewcomerRequestDto {
    excelLine: Omit<newComerTabType, "id">;
    refetch: () => void;
    id: number;
}

export interface editExcelStoppedRequestDto {
    excelLine: Omit<paymentStoppedTabType, "id">;
    refetch: () => void;
    id: number;
}
