/**
 * px → rem 변환 함수
 * @param value - px 값 (공백으로 구분된 다중 값 지원)
 * @param baseSize - 기준 폰트 사이즈 (기본: 16px)
 */
export const pxToRem = (
  value: number | string | (number | string)[],
  baseSize: number = 16
): string => {
  if (Array.isArray(value)) {
    return value.map((v) => pxToRem(v, baseSize)).join(" ");
  }

  if (typeof value === "number") {
    return `${(value / baseSize).toFixed(2)}rem`;
  }

  if (typeof value === "string") {
    return value
      .split(" ")
      .map((v) => {
        const num = parseFloat(v);
        return isNaN(num) ? v : `${(num / baseSize).toFixed(2)}rem`;
      })
      .join(" ");
  }

  throw new Error("pxToRem: 지원되지 않는 값 형식입니다.");
};
