import {
    editExcelCashRequestDto,
    editExcelNewcomerRequestDto,
    editExcelStoppedRequestDto,
    editExcelTargetRequestDto,
    excelFileType,
    saveExcelRequestDto,
} from "../../models/request";
import { getExcelResponseDto } from "../../models/response";
import instance from "../axios";

const path = "/allowance";

export const saveExcel = async ({ type, file }: saveExcelRequestDto) => {
    const formData: FormData = new FormData();
    formData.append("file", file);

    return await instance.put(`${path}/?type=${type}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getExcel = async (
    type: excelFileType //참전유공자 명예수당, 참전유공자 배우자수당, 보훈 예우수당
) => {
    const { data } = await instance.get<getExcelResponseDto>(
        `${path}?type=${type}`
    );
    return data;
};

export const exportExcel = async (type: excelFileType) => {
    const { data } = await instance.get<File>(`${path}/export?type=${type}`);
    return data;
};

//보훈수당 엑셀 파일 수정-대상자 현황
export const editExcelTarget = async ({
    id,
    excelLine,
}: editExcelTargetRequestDto) => {
    return await instance.patch(`${path}/target/${id}`, excelLine);
};

//보훈수당 엑셀 파일 수정-현금 지급
export const editExcelCash = async ({
    id,
    excelLine,
}: editExcelCashRequestDto) => {
    return await instance.patch(`${path}/cash/${id}`, excelLine);
};

//보훈수당 엑셀 파일 수정-신규자
export const editExcelNewcomer = async ({
    id,
    excelLine,
}: editExcelNewcomerRequestDto) => {
    return await instance.patch(`${path}/cash/${id}`, excelLine);
};

//보훈수당 엑셀 파일 수정-지급중지자
export const editExcelStopped = async ({
    id,
    excelLine,
}: editExcelStoppedRequestDto) => {
    return await instance.patch(`${path}/cash/${id}`, excelLine);
};
