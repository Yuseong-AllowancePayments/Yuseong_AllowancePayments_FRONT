import {
  editExcelCashRequestDto,
  editExcelNewcomerRequestDto,
  editExcelStoppedRequestDto,
  editExcelTargetRequestDto,
  saveExcelRequestDto,
} from "../../models/request";
import {
  getExcelResponseDto,
  parsingExcelResponseDto,
} from "../../models/response";
import instance from "../axios";

export const saveExcel = async (request: saveExcelRequestDto) => {
  const { type, file } = request;
  const formData: FormData = new FormData();
  formData.append("file", file);

  return await instance.put(`/allowance/?type=${type}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getExcel = async (
  type: "WAR_VETERAN" | "WAR_VETERAN_SPOUSE" | "HONORABLE_ALLOWANCE" //참전유공자 명예수당, 참전유공자 배우자수당, 보훈 예우수당
) => {
  const response = await instance.get<getExcelResponseDto>(
    `/allowance/?type=${type}`
  );
  return response.data;
};

export const exportExcel = async (
  type: "WAR_VETERAN" | "WAR_VETERAN_SPOUSE" | "HONORABLE_ALLOWANCE"
) => {
  const response = await instance.get<File>(`/allowance/export/?type=${type}`);
  return response.data;
};

export const parsingExcel = async (file: File) => {
  const formData: FormData = new FormData();
  formData.append("file", file);

  const response = await instance.post<parsingExcelResponseDto>(
    `/excel/parse`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

//보훈수당 엑셀 파일 수정-대상자 현황
export const editExcelTarget = async (request: editExcelTargetRequestDto) => {
  return await instance.patch(
    `/allowance/target/${request.id}`,
    request.excelLine
  );
};

//보훈수당 엑셀 파일 수정-현금 지급
export const editExcelCash = async (request: editExcelCashRequestDto) => {
  return await instance.patch(
    `/allowance/cash/${request.id}`,
    request.excelLine
  );
};

//보훈수당 엑셀 파일 수정-신규자
export const editExcelNewcomer = async (
  request: editExcelNewcomerRequestDto
) => {
  return await instance.patch(
    `/allowance/cash/${request.id}`,
    request.excelLine
  );
};

//보훈수당 엑셀 파일 수정-지급중지자
export const editExcelStopped = async (request: editExcelStoppedRequestDto) => {
  return await instance.patch(
    `/allowance/cash/${request.id}`,
    request.excelLine
  );
};
