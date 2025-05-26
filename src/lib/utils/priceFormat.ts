export const priceFormat = (
  number: number,
  options?: { prefix?: string; suffix?: string }
) => {
  return (
    typeof number === "number" &&
    `${options?.prefix || ""}${new Intl.NumberFormat("ko-KR").format(number)}${
      options?.suffix || ""
    }`
  );
};
