import { IntlErrorCode } from 'next-intl';
import { Pathnames } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'be', 'la', 'ru', 'fr'] as const;

export const localePrefix = 'as-needed';

export const localeNames: any = {
  en: 'Eng',
  be: 'Бел',
  la: 'Łac',
  ru: 'Рус',
  fr: 'Fra',
};

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      console.error(error);
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join('.');
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + ' is not yet translated';
      } else {
        return 'Dear developer, please fix this message: ' + path;
      }
    },
  };
});
