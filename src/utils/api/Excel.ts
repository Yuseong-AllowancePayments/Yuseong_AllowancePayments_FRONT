import { parsingExcelResponseDto } from "../../models/response";
import instance from "../axios";

const path = "/excel";

export const parsingExcel = async (file: File) => {
    const formData: FormData = new FormData();
    formData.append("file", file);

    const { data } = await instance.post<parsingExcelResponseDto>(
        `${path}/parse`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return data;
};
