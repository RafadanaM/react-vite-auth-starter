import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}
function Container({ children }: IContainer) {
  return <div className="mx-auto max-w-screen-2xl ">{children}</div>;
}

export default Container;
