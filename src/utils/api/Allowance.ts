import { useMutation, useQuery } from "@tanstack/react-query";
import {
    editExcelCashRequestDto,
    editExcelNewcomerRequestDto,
    editExcelStoppedRequestDto,
    editExcelTargetRequestDto,
    excelFileType,
} from "../../models/request";
import { getExcelResponseDto } from "../../models/response";
import instance from "../axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import fileSaver from "file-saver";
import { getValueByKey } from "../functions/UseGetPropertyKey";
import { excelTypes } from "../functions/Translation";

const path = "/allowance";

export const useSaveExcel = (type: string, file: File, refetch: () => void) => {
    const formData: FormData = new FormData();
    formData.append("file", file);

    return useMutation(
        async () =>
            instance.post(`${path}?type=${type}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
        {
            onSuccess: (res) => {
                toast.success("파일을 추가하였습니다.");
                refetch();
            },
            onError: (err: AxiosError<AxiosError>) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            toast.error("정보를 다시 확인해주세요.");
                            break;
                        case 429:
                            toast.error(
                                `요청이 너무 많아 나중에 시도해주세요.`
                            );
                            break;
                        default:
                            toast.error(`개발자에게 문의해주세요.`);
                    }
                } else toast.error("네트워크 연결 상태를 확인해주세요.");
            },
        }
    );
};

export const useGetExcel = (
    type: excelFileType //참전유공자 명예수당, 참전유공자 배우자수당, 보훈 예우수당
) => {
    return useQuery(["getExcel"], async () => {
        const { data } = await instance.get<getExcelResponseDto>(
            `${path}?type=${type}`
        );
        return data;
    });
};

export const useExportExcel = (type: excelFileType) => {
    const date = new Date();
    return useMutation(
        () =>
            instance.get(`${path}/export?type=${type}`, {
                responseType: "blob",
            }),
        {
            onSuccess: (res) => {
                const data = new Blob([res.data], {
                    type: res.headers["content-type"],
                });
                fileSaver.saveAs(
                    data,
                    `${date.getFullYear()}.${String(
                        date.getMonth() + 1
                    ).padStart(2, "0")} ${getValueByKey(
                        excelTypes,
                        type
                    )} 지급 대상자.xlsx`
                );
                toast.success("성공적으로 다운로드 되었습니다.");
            },
            onError: () => {
                toast.error("파일 다운에 실패하였습니다.");
            },
        }
    );
};

//보훈수당 엑셀 파일 수정-대상자 현황
export const useEditExcelTarget = ({
    id,
    excelLine,
}: editExcelTargetRequestDto) => {
    return useMutation(async () =>
        instance.patch(`${path}/target/${id}`, excelLine)
    );
};

//보훈수당 엑셀 파일 수정-현금 지급
export const useEditExcelCash = ({
    id,
    excelLine,
}: editExcelCashRequestDto) => {
    return useMutation(async () =>
        instance.patch(`${path}/cash/${id}`, excelLine)
    );
};

//보훈수당 엑셀 파일 수정-신규자
export const useEditExcelNewcomer = ({
    id,
    excelLine,
}: editExcelNewcomerRequestDto) => {
    return useMutation(async () =>
        instance.patch(`${path}/newcomer/${id}`, excelLine)
    );
};

//보훈수당 엑셀 파일 수정-지급중지자
export const useEditExcelStopped = ({
    id,
    excelLine,
}: editExcelStoppedRequestDto) => {
    return useMutation(async () =>
        instance.patch(`${path}/stopped/${id}`, excelLine)
    );
};
