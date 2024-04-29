'use client';
import React, { useState } from 'react';
import { Link } from '@navigation';
import { Button, Container, Nav, NavLink } from 'reactstrap';
import clsx from 'clsx';

import { useTranslate } from '@app/hooks';
import Image from 'next/image';
import LanguageButton from './LanguageButton';
import { usePathname } from 'next/navigation';

const Header = () => {
  const t = useTranslate('COMP_Header');
  const [canvasToggler, setCanvasToggler] = useState(false);
  const [navMenu, setNavMenu] = useState('');

  const pathname = usePathname();
  const currentPathname = pathname.split('/').slice(2).join('/');
  const links = [
    { name: t('HOME'), href: '/', className: '' },
    { name: t('ABOUT_US'), href: '/about-us', className: '' },
    { name: t('CONTACT_US'), href: '/contact-us', className: '' },
  ];

  return (
    <header className="flex-header py-2 py-lg-0 fixed-top">
      <Container className="flex-between">
        <Link href={'/'}>
          <Image src="/images/header/logo.jpg " alt="logo" width={100} height={46} />
        </Link>
        <React.Fragment>
          {links.map((link, index) => {
            const navLinkPathname = link.href.slice(1);
            return (
              <Nav key={index} className="d-md-block d-none">
                <NavLink
                  href={link.href || undefined}
                  className={`${link.className} ${clsx({
                    active: currentPathname === navLinkPathname,
                  })}`}
                  onClick={() => {
                    setNavMenu(navMenu === `${index}` ? '' : `${index}`);
                  }}
                >
                  {link.name}
                </NavLink>
              </Nav>
            );
          })}
        </React.Fragment>
        <div className="flex gap-2">
          <LanguageButton />
          <Button onClick={() => setCanvasToggler(!canvasToggler)} className="border-0 p-0 d-md-none bg-white">
            <i className="fa-solid fa-bars text-primary"></i>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
