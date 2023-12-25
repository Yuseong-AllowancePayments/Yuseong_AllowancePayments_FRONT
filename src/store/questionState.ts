import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
    cashPaymentTabType,
    getExcelResponseDto,
    newComerTabType,
    paymentStoppedTabType,
    paymentTargetTabType,
} from "../models/response";
import { excelFileType, excelTabType } from "../models/request";

interface excelTypeState {
    excelType: excelFileType;
    setExcelType: (type: excelFileType) => void;
}

export const useExcelTypeState = create<excelTypeState>()(
    devtools((set) => ({
        excelType: "WAR_VETERAN",
        setExcelType: (type: excelFileType) => set({ excelType: type }),
    }))
);

interface excelDataState {
    excelData: getExcelResponseDto;
    setExcelData: (
        name: excelTabType,
        data:
            | paymentTargetTabType
            | cashPaymentTabType
            | newComerTabType
            | paymentStoppedTabType
    ) => void;
}

export const useExcelDataState = create<excelDataState>()(
    devtools((set) => ({
        excelData: {
            paymentTargetTab: [],
            cashPaymentTab: [],
            newComerTab: [],
            paymentStoppedTab: [],
        },
        setExcelData: (
            name: excelTabType,
            data:
                | paymentTargetTabType
                | cashPaymentTabType
                | newComerTabType
                | paymentStoppedTabType
        ) =>
            set((prev) => ({
                excelData: { ...prev.excelData, [name]: { data } },
            })),
    }))
);

interface excelTabTypeState {
    excelTab: excelTabType;
    setExcelTab: (tab: excelTabType) => void;
}

export const useExcelTabTypeState = create<excelTabTypeState>()(
    devtools((set) => ({
        excelTab: "paymentTargetTab",
        setExcelTab: (tab: excelTabType) => set({ excelTab: tab }),
    }))
);
