import type { Route as NextRouter } from "next";

export type Route<T = string> = NextRouter<string>;
export type PathName = Route<string>;
