import { setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

import { headers } from 'next/headers';

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

export default async function DefaultLayout({ params, children }: Props) {
  const { locale } = await params;
  const headersList = await headers();
  const country = headersList.get('x-country') ?? 'FR';

  setRequestLocale(locale);

  return (
    <>
      <Header country={country} />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export const experimental_ppr = true;
