import { userLoginRequestDto } from "../../models/request";
import { userLoginResponseDto } from "../../models/response";
import instance from "../axios";

const path = "/auth";

export const userLogin = async ({
    accountId,
    password,
}: userLoginRequestDto) => {
    const { data } = await instance.post<userLoginResponseDto>(
        `${path}/admin/token`,
        {
            accountId: accountId,
            password: password,
        }
    );

    return data;
};
