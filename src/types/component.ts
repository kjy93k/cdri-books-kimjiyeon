import type { HTMLAttributes, PropsWithChildren } from "react";

export type DOMProps = Pick<
  HTMLAttributes<HTMLElement>,
  "className" | "id" | "style"
>;
export type ComponentBaseProps<T = object> = PropsWithChildren<DOMProps & T>;
