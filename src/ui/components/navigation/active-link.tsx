import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();

  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  console.log(
    "router pathname ==> : ",
    router.pathname,
    "is active ==> : ",
    isActive
  );

  return (
    <Link href={href} className={clsx(isActive && "text-primary-400")}>
      {children}
    </Link>
  );
};
