import { userLoginRequestDto } from "../../models/request";
import { userLoginResponseDto } from "../../models/response";
import instance from "../axios";

export const userLogin = async (request: userLoginRequestDto) => {
  const { accountId, password } = request;

  return await instance.post<userLoginResponseDto>("/auth/admin/token", {
    accountId: accountId,
    password: password,
  });
};
