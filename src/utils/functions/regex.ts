export const regex = {
    serialNumber: /^\d+\.\d$/,
    hangjungdong: /^(\d{2})-([\D\d]*)$/,
    veteransNumber: /^(\d{2})-(\d{8})$/,
    name: /^[가-힣]{2,4}$/,
    residentRegistrationNumber:
        /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])-[1-4][0-9]{6}$/,
    depositType: /^(\d{2}):(\D*)$/,
    bankName: /^(\d{3}):(\D*)$/,
    oldBankAccountNumber: (bankCode: string) => {
        switch (bankCode) {
            case "071": // 우체국
                return /^\d{6}-\d{2}-\d{6}$/;
            case "012": // 농협지역은행
                return /^(\d{3}-(51|52|56)-\d{6})$/;
            case "011": // 농협중앙회
                return /^\d{6}-(01|02|12)-\d{6}$/;
            case "004": // 국민은행
                return /^\d{3}-\d{2}-\d{4}-\d{3}$/;
            case "048": // 신협
                return /^\d{6}-\d{2}-\d{6}$/;
            case "020": // 우리은행
                return /^\d{4}-\d{3}-\d{6}$/;
            case "081": // 하나은행
                return /^\d{3}-\d{6}-\d{5}$/;
            case "003": // 중소기업은행
                return /^\d{3}-\d{2}-\d{6}-\d{1}$/;
            case "045": // 새마을금고
                return /^\d{4}-\d{2,3}-\d{6}-\d{1}$/;
            case "088": // 신한은행
                return /^\d{3}-\d{3}-\d{6}$/;
            case "023": // SC제일은행, 스탠다드차타드은행
                return /^\d{3}-\d{2}-\d{6}$/;
            case "034": // 광주은행
                return /^\d{4}-\d{3}-\d{6}$/;
            default:
                return /^\d{3}-\d{3}-\d{6}$/;
        }
    },
    newBankAccountNumber: (bankCode: string) => {
        switch (bankCode) {
            case "071": // 우체국
                return /^\d{6}-\d{2}-\d{6}$/;
            case "012": // 농협지역은행
                return /^(3(51|52|56)-\d{4}-\d{4}-\d{2})$/;
            case "011": // 농협중앙회
                return /^(3(01|02|12)-\d{4}-\d{4}-\d{2})$/;
            case "004": // 국민은행
                return /^\d{6}-\d{2}-\d{6}$/;
            case "048": // 신협
                return /^\d{3}-\d{3}-\d{6}$/;
            case "020": // 우리은행
                return /^\d{4}-\d{3}-\d{6}$/;
            case "081": // 하나은행
                return /^\d{3}-\d{6}-\d{5}$/;
            case "003": // 중소기업은행
                return /^\d{3}-\d{6}-\d{2}-\d{2}$/;
            case "045": // 새마을금고
                return /^\d{4}-\d{4}-\d{4}-\d{1}$/;
            case "088": // 신한은행
                return /^\d{3}-\d{2}-\d{6}$/;
            case "023": // SC제일은행, 스탠다드차타드은행
                return /^\d{3}-\d{2}-\d{6}$/;
            case "034": // 광주은행
                return /^\d{4}-\d{3}-\d{6}$/;
            case "032": // 부산은행
                return /^\d{4}-\d{3}-\d{6}$/;
            case "005": // 한국외환은행
                return /^\d{4}-\d{3}-\d{6}$/;
            default:
                return /^\d{6}-(01|02|12)-\d{6}$/;
        }
    },
    reason: /^[가-힣]*$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    phoneNumber: /^\d{2,3}-\d{3,4}-\d{4}$/,
    postalCode: /(\d{3}-\d{3}|\d{5})/,
};
