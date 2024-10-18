import Header from '@/components/header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main>
      <Header />
      <div className="relative flex items-center justify-center">
        <div className="container relative flex h-full min-h-screen flex-col px-6 pt-20 md:px-8 md:pt-40 ">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-2xl font-semibold md:text-5xl">{t('title')}</h1>
            <h2 className="flex items-center text-xl font-semibold md:text-2xl">
              {t('subtitle')}
            </h2>
            <p className="max-w-[1200px] text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              {t('description')}
            </p>
          </div>

          <div className="my-6 flex flex-col items-center gap-8 text-center">
            <h2 className="flex items-center text-xl font-semibold md:text-2xl">
              {t('how_to_participate')}
            </h2>
            <p className="w-full max-w-[1200px] text-left text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              {t('first_step')}
            </p>
            <div className="flex gap-2">
              <Link
                href={'https://next.falanster.info/index.php/apps/forms/s/5D43xqYorsqr2oy7WNj8LDXS'}
                target="_blank"
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'w-full bg-purple-500 hover:bg-purple-600',
                )}
              >
                {t('participate_application')}
              </Link>
            </div>
            <p className="w-full max-w-[1200px] text-left text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              {t('second_step')}
            </p>
            <div className="flex gap-2">
              <Link
                href={'donats_link'}
                target="_blank"
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'w-full bg-purple-500 hover:bg-purple-600',
                )}
              >
                {t('donate_button')}
              </Link>
            </div>
            <p className="w-full max-w-[1200px] text-left text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              {t('third_step')}
            </p>
            <div className="flex gap-2">
              <Link
                href={'https://next.falanster.info/index.php/s/ENLgW8eoWmn7pJ8'}
                target="_blank"
                className={cn(
                  buttonVariants({ size: 'default' }),
                  'w-full bg-purple-500 hover:bg-purple-600',
                )}
              >
                {t('vouting_button')}
              </Link>
            </div>
            <h2 className="flex items-center text-xl font-semibold md:text-2xl">
              {t('schedule')}
            </h2>
            <ul className="w-full max-w-[1200px] text-left">
              <li>
                <b>Крок 1. Лістапад - снежань 2024.</b> Збіраем грошы на прэмію.
              </li>
              <li>
                <b>Крок 2. Снежань 2024.</b> Прымаем заяўкі на намінантаў.
              </li>
              <li>
                <b>Крок 3. Студзень-люты 2025.</b> Галасуем за высунутых асоб.
              </li>
              <li>
                <b>Фінал. 15 Сакавік 2025.</b> Узнагарода пераможцы(аў). Дэталі
                будуць на нашых пабліках!{' '}
              </li>
            </ul>
            <p className="max-w-[1200px] text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              Рэгламент прэміі ў 3 нумары. Тут лаканічна паўтарым
            </p>
            <h2 className="flex items-center text-xl font-semibold md:text-2xl">
              Нашы паблікі
            </h2>
            <ul className="w-full max-w-[1200px] text-left">
              <li>
                <Link
                  href={'https://www.instagram.com/bison.higgs/'}
                  target="_blank"
                  className="hover:text-purple-600"
                >
                  https://www.instagram.com/bison.higgs/
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.instagram.com/pamylka.zin/'}
                  target="_blank"
                  className="hover:text-purple-600"
                >
                  https://www.instagram.com/pamylka.zin/
                </Link>
              </li>
              <li>
                <Link
                  href={'https://vkl.world/@PamylkaZin'}
                  target="_blank"
                  className="hover:text-purple-600"
                >
                  https://vkl.world/@PamylkaZin
                </Link>
              </li>
              <li>
                <Link
                  href={'https://x.com/PamylkaZin'}
                  target="_blank"
                  className="hover:text-purple-600"
                >
                  https://x.com/PamylkaZin
                </Link>
              </li>
            </ul>
            <h2 className="flex items-center text-xl font-semibold md:text-2xl">
              Узнікаюць пытанні ці хочаце нам дапамагчы
            </h2>
            <p className="max-w-[1200px] pb-32 text-xl leading-normal text-muted-foreground sm:leading-8 md:text-xl">
              Пішыце на мэйл
              <div>
                <Link
                  href={'mailto:pamylka.zin@gmail.com'}
                  target="_blank"
                  className="hover:text-purple-600"
                >
                  pamylka.zin@gmail.com
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
