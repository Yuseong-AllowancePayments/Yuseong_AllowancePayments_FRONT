export interface userLoginResponseDto {
  access_token: "";
  access_token_exp: "";
}

export interface getExcelType {
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
}

export interface getExcelResponseDto {
  paymentTargetTab: getExcelType[];
}

export interface parsingExcel {
  serialNumber: number;
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
}

export interface parsingExcelResponseDto {
  paymentTargetTab: parsingExcel[];
}
