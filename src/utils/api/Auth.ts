import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { userLoginRequestDto } from "../../models/request";
import {
    pinCodesResponseDto,
    userLoginResponseDto,
} from "../../models/response";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import instance from "../axios";

const path = "/auth";

export const useUserLogin = (signData: userLoginRequestDto) => {
    const navigate = useNavigate();
    return useMutation(
        async () =>
            axios.post<userLoginResponseDto>(
                `${process.env.REACT_APP_PUBLIC_BASE_URL}${path}/admin/token`,
                signData
            ),
        {
            onSuccess: (e) => {
                localStorage.setItem("access_token", e.data.accessToken);
                toast.success("로그인을 성공하였습니다.");
                navigate("/main");
            },
            onError: (err: AxiosError<AxiosError>) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            toast.error("정보를 다시 확인해주세요.");
                            break;
                        case 404:
                            toast.error(
                                `아이디와 비벌번호를 다시 확인해주세요.`
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

export const useGetPIN = () => {
    return useQuery(["getPIN"], async () => {
        const { data } = await instance.get<pinCodesResponseDto>(`${path}/pin`);
        return data;
    });
};

export const useAddPIN = (centerName: string, refetch: () => void) => {
    return useMutation(
        async () => instance.post(`${path}/pin`, { centerName: centerName }),
        {
            onSuccess: () => {
                toast.success("행정동 PIN번호를 추가하였습니다.");
                refetch();
            },
            onError: (err: AxiosError<AxiosError>) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 409:
                            toast.error(`이미 존재하는 행정동입니다.`);
                            break;
                        default:
                            toast.error(`개발자에게 문의해주세요.`);
                    }
                } else toast.error("네트워크 연결 상태를 확인해주세요.");
            },
        }
    );
};

export const useDeletePIN = (code: string, refetch: () => void) => {
    return useMutation(async () => instance.delete(`${path}/pin/${code}`), {
        onSuccess: () => {
            toast.success("행정동 PIN번호를 삭제하였습니다.");
            refetch();
        },
        onError: (err: AxiosError<AxiosError>) => {
            if (err.response) {
                switch (err.response.status) {
                    case 404:
                        toast.error(`이미 존재하지 않는 행정동입니다.`);
                        break;
                    default:
                        toast.error(`개발자에게 문의해주세요.`);
                }
            } else toast.error("네트워크 연결 상태를 확인해주세요.");
        },
    });
};
