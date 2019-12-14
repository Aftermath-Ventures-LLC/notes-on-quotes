import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, FC, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

const ActiveLink: FC<ActiveLinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();

  const child = Children.only(children);

  const isActive = pathname === props.href;

  return <Link {...props}>{React.cloneElement(child, { isActive })}</Link>;
};

export default ActiveLink;
