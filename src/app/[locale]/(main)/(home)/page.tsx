import React from 'react';
import { Container } from 'reactstrap';

import { HomeBanner, Services, LocationMap } from '@components';

const page = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <Container className="my-5">
        <Services />
      </Container>
      <LocationMap />
    </React.Fragment>
  );
};

export default page;
