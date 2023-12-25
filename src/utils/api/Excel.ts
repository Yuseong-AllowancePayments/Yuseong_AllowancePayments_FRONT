import { useMutation } from "@tanstack/react-query";
import { getExcelResponseDto } from "../../models/response";
import instance from "../axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const path = "/excel";

export const useParsingExcel = async (file: File) => {
    const formData: FormData = new FormData();
    formData.append("file", file);

    return useMutation(
        async () =>
            instance.post<getExcelResponseDto>(`${path}/parse`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
        {
            onSuccess: () => {
                toast.success("파싱에 성공하였습니다.");
            },
            onError: (err: AxiosError<AxiosError>) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            toast.success("정보를 다시 확인해 주세요.");
                            break;
                        case 401:
                            toast.success("개발자에게 문의해 주세요.");
                            break;
                    }
                } else toast.success("네트워크 연결 상태를 확인해 주세요.");
            },
        }
    );
};
