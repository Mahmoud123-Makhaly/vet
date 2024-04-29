'use client';
import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@navigation';
 import Image from 'next/image';

const LanguageButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const url = searchParams.get('redirectURL') ? `${pathname}?redirectURL=${searchParams.get('redirectURL')}` : pathname;
  useEffect(() => {
    const savedLang = localStorage.getItem('I18N_LANGUAGE');
    if (savedLang && savedLang != locale) {
      router.push(url, { locale: savedLang });
    }
  }, []);

  return (
    <Image
      onClick={() => {
        const newLang = locale === 'ar' ? 'en' : 'ar';
        localStorage.setItem('I18N_LANGUAGE', newLang);
        router.push(url, { locale: newLang });
      }}
      src={locale === 'ar' ? '/images/svgs/header/UK.svg' : '/images/svgs/header/EG.svg'}
      alt={'language'}
      width={30}
      height={30}
      className="rounded rounded-0 ms-2 pointer"
    />
  );
};

export default LanguageButton;
