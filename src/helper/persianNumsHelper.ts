const toPersianDigits = (num: number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return String(num).replace(/\d/g, (digit: any) => persianDigits[digit]);
};

export { toPersianDigits };