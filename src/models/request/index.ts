export type excelFileType =
    | "WAR_VETERAN"
    | "WAR_VETERAN_SPOUSE"
    | "HONORABLE_ALLOWANCE";

export interface userLoginRequestDto {
    accountId: string;
    password: string;
}

export interface saveExcelRequestDto {
    type: excelFileType;
    file: File;
}

export interface editExcelTargetRequestDto {
    excelLine: {
        serial_number: number;
        hang_jung_dong: string;
        veterans_number: string;
        resident_registration_number: string;
        name: string;
        address: string;
        deposit_type: string;
        bank_name: string;
        account_holder: string;
        bank_account_number: string;
        sibi: string;
        gubi: string;
        allowance_type: string;
        note: string;
    };
    id: number;
}

export interface editExcelCashRequestDto {
    excelLine: {
        serial_number: number;
        hang_jung_dong: string;
        veterans_number: string;
        resident_registration_number: string;
        name: string;
        address: string;
        deposit_type: string;
        sibi: number;
        gubi: number;
        allowance_type: string;
        note: string;
    };
    id: number;
}

export interface editExcelNewcomerRequestDto {
    excelLine: {
        serial_number: number;
        hang_jung_dong: string;
        veterans_number: string;
        resident_registration_number: string;
        name: string;
        address: string;
        deposit_type: string;
        bank_name: string;
        account_holder: string;
        bank_account_number: string;
        allowance_type: string;
        note: string;
        transfer_reason: string;
        transfer_date: string;
    };
    id: number;
}

export interface editExcelStoppedRequestDto {
    excelLine: {
        serial_number: number;
        hang_jung_dong: string;
        veterans_number: string;
        resident_registration_number: string;
        name: string;
        address: string;
        deposit_type: string;
        bank_name: string;
        account_holder: string;
        bank_account_number: string;
        sibi: string;
        gubi: string;
        allowance_type: string;
        note: string;
        stopped_reason: string;
        stopped_date: string;
        transfer_address: string;
    };
    id: number;
}
