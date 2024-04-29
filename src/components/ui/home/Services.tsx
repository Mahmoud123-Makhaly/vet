'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';

import { Link } from '@navigation';

import { CardMaker } from '@components';
import { useLocale } from 'next-intl';
import { services } from './data';

const Services = () => {
  const locale: 'ar' | 'en' = useLocale() as 'ar' | 'en';
  return (
    <div className="py-4">
      <Row>
        {services[locale].map((item, index) => (
          <Col md={6} lg={3} key={index}>
            <CardMaker img={item.imgSrc} className="overflow-hidden flex-col">
              <Link href={item.slug || ''}>
                <h4 className="text-primary">{item.title}</h4>
                <p className="text-gray">{item.description}</p>
              </Link>
            </CardMaker>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
