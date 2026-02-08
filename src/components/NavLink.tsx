"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const stripHash = (href: string) => href.split("#")[0] ?? href;

const isActivePath = (pathname: string, href: string) => {
  const target = stripHash(href);
  if (target === "") return pathname === "/";
  return pathname === target;
};

const isHashOnly = (href: string) => href.startsWith("#");

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname() ?? "";
    const active = !isHashOnly(href) && isActivePath(pathname, href);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, active && activeClassName, pendingClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
