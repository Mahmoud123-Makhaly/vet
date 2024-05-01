import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslate } from '@app/hooks';

const HomeBanner = () => {
  const t = useTranslate('COMP_Home_Banner');

  return (
    <div className="home-banner py-5">
      <Container className="h-100 py-5">
        <Row className=" align-items-center h-100">
          <Col md={6}>
            <div className="text-primary">
              <h3>{t('ANIMAL_CONTROL')}</h3>
              <h1 className="mb-0  fw-bold">{t('A_FULL_HELP')}</h1>
              <h1 className="mb-0 fw-bold ">{t('ANIMALS')}</h1>
              <h5 className="text-secondary">{t('FREE_APPLIES')}</h5>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src="/images/banner.webp"
              alt="banner "
              sizes="100vw"
              width={0}
              height={0}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
