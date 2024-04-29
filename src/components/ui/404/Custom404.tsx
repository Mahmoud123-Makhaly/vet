import React from 'react';
import Image from 'next/image';

import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

const Custom404 = () => {
  const t = useTranslate('COMP_Custom404');
  return (
    <div className="d-flex gap-4 flex-column justify-content-center h-100 align-items-center py-5 my-5">
      <Image src="/images/404/notFound.png" alt="404" width={300} height={300} />
      <Link href="/" className="btn btn-primary">
        {t('BACK_TO_HOME')}
      </Link>
    </div>
  );
};

export default Custom404;
