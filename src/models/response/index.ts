export interface userLoginResponseDto {
    accessToken: string;
}

export interface getExcelResponseDto {
    paymentTargetTab: paymentTargetTabType[];
    cashPaymentTab: cashPaymentTabType[];
    newComerTab: newComerTabType[];
    paymentStoppedTab: paymentStoppedTabType[];
}

export interface paymentTargetTabType {
    serialNumber: string;
    hangJungDong: string;
    veteransNumber: string;
    residentRegistrationNumber: string;
    name: string;
    address: string;
    depositType: string;
    bankName: string;
    accountHolder: string;
    bankAccountNumber: string;
    sibi: number;
    gubi: number;
    note: string;
    id: number;
}

export interface cashPaymentTabType {
    address: string;
    depositType: string;
    gubi: number;
    hangJungDong: string;
    name: string;
    note: string;
    residentRegistrationNumber: string;
    serialNumber: string;
    sibi: number;
    id: number;
    veteransNumber: string;
}

export interface newComerTabType {
    to_pay: boolean;
    serialNumber: string;
    warRegistrationNumber: string;
    applicantName: string;
    applicantID: string;
    applicantBirthday?: string;
    applicantPostalCode: string;
    applicantAddressDetail: string;
    applicantPhoneNumber: string;
    hangJungDong: string;
    bankName: string;
    bankAccountNumber: string;
    accountHolder: string;
    transferDate: string;
    applicationDate: string;
    applicationReason: string;
    veteransNumber?: string;
    nationalMeritName?: string;
    nationalMeritID?: string;
    nationalMeritDateOfDeath?: string;
    warType?: string;
    veteransType?: string;
    applicantGender?: string;
    familyRelation?: string;
    bereavedFamily?: string;
    note: string;
    id: number;
}

export interface paymentStoppedTabType {
    accountHolder: string;
    address: string;
    bankAccountNumber: string;
    bankName: string;
    depositType: string;
    hangJungDong: string;
    name: string;
    note: string;
    residentRegistrationNumber: string;
    serialNumber: string;
    stoppedDate: string;
    stoppedReason: string;
    transferAddress: string;
    veteransNumber: string;
    id: number;
}

export interface pinType {
    code: string;
    centerName: string;
}

export interface pinCodesResponseDto {
    codes: pinType[];
}
