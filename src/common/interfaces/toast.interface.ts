import { RefObject } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

export type ToastPosition =
  | "bottom-left"
  | "bottom-right"
  | "bottom-middle"
  | "top-left"
  | "top-right"
  | "top-middle";

export interface IToastOption {
  id?: string;
  type: ToastType;
  title: string;
  description: string;
}

export interface IToastProperties extends IToastOption {
  id: string;
  nodeRef: RefObject<HTMLDivElement>;
}
