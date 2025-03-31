import { getRequestConfig } from 'next-intl/server';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  const lang = getCookie('LANGUAGE');
  const cookieStore = await cookies();

  const locale = cookieStore.get('LANGUAGE')?.value || "en";
 
  return {
    locale: locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});