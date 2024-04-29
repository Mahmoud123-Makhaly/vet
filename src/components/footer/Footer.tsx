'use client';
import React from 'react';
import { Col, Container, Input, Row } from 'reactstrap';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import { ImageMaker } from '@components';

const Footer = () => {
  const t = useTranslate('COMP_Footer');
  return (
    <footer className="text-white">
      <div className="bg-primary py-5">
        <Container>
          <Row>
            <Col md={3}>
              <ImageMaker src={'/images/header/logo.jpg'} width={137} height={48} className="pb-3" />
              <p className="pt-3 text-white">Pet your Pet</p>
            </Col>
            <Col md={2}>
              <h6 className="fw-semibold font-18 text-white mb-3">{t('Contacts')}</h6>
              <ul className="flex-col-start gap-3">
                <li>
                  <Link href={'/about-us'} className="font-14">
                    {t('ABOUT_US')}
                  </Link>
                </li>
                <li>
                  <Link href={'/contact-us'} className="font-14">
                    {t('CONTACT_US')}
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h6 className="fw-semibold font-18 text-white mb-3">{t('CONTACT_US')}</h6>
              <ul className="flex-col-start gap-3">
                <li>
                  <a href=" " className="d-flex align-items-center gap-2">
                    <ImageMaker src={'/images/svgs/footer/location.svg'} width={18} height={24} />
                    <p className="text-white font-14">Area - Al Filaya, Office No.8 R.A.K, United Arab Emirates</p>
                  </a>
                </li>
                <li>
                  <a href=" " className="d-flex align-items-center gap-2">
                    <ImageMaker src={'/images/svgs/footer/phone.svg'} width={24} height={24} />
                    <p className="text-white font-14">+971 0522950070</p>
                  </a>
                </li>
                <li>
                  <a href=" " className="d-flex align-items-center gap-2">
                    <ImageMaker src={'/images/svgs/footer/mail.svg'} width={24} height={20} />
                    <p className="text-white font-14">amtspc@gmail.com</p>
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h6 className="fw-semibold font-18 text-white mb-3">{t('FOLLOW_US')}</h6>
              <ul className="flex-between gap-2 my-3">
                <li>
                  <a href=" ">
                    <ImageMaker src={'/images/svgs/social/facebook-white.svg'} width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <ImageMaker src={'/images/svgs/social/instagram-white.svg'} width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <ImageMaker src={'/images/svgs/social/x-white.svg'} width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <ImageMaker src={'/images/svgs/social/linkedin-white.svg'} width={32} height={32} />
                  </a>
                </li>
              </ul>
              <p className="font-14 text-white my-3">Newsletter SignUp</p>
              <Input type="email" placeholder="Enter E-mail Address" className="bg-transparent text-white" />
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
