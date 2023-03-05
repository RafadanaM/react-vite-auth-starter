import { ReactNode } from "react";
import { Link, To } from "react-router-dom";

interface INavbarItem {
  to: To;
  children: ReactNode;
  type?: "link" | "button";
}

function NavbarItem({ to, type = "link", children }: INavbarItem) {
  if (type === "link") return <Link to={to}>{children}</Link>;

  return <button type="button">{children}</button>;
}

export default NavbarItem;
