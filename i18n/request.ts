import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// Can be imported from a shared config
const locales = ['en', 'tr'];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
