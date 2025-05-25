import dynamic from "next/dynamic";
import { ComponentType, HTMLAttributes, SVGProps } from "react";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";

type SvgrComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap = {
  arrowDown: dynamic(
    () => import("@/assets/icons/arrow-down.svg")
  ) as SvgrComponent,
  close: dynamic(() => import("@/assets/icons/close.svg")) as SvgrComponent,
  heartFill: dynamic(
    () => import("@/assets/icons/heart-fill.svg")
  ) as SvgrComponent,
  heartLine: dynamic(
    () => import("@/assets/icons/heart-line.svg")
  ) as SvgrComponent,
  search: dynamic(() => import("@/assets/icons/search.svg")) as SvgrComponent,
} as const;

export type IconName = keyof typeof iconMap;
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon = ({
  name,
  size = 24,
  color = theme.colors.text.primary,
  ...props
}: IconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;

  return (
    <span
      css={{ color: color, fontSize: pxToRem(size), display: "inline-flex" }}
      {...props}
    >
      <IconComponent name={name} width="1em" height="1em" />
    </span>
  );
};

export default Icon;
