import 'src/_libs/style/global.css';
import { Metadata } from 'next';
import { COLORS } from 'src/_libs/style/colors';
import { Providers } from './providers';
import meta from 'src/_libs/_constants/meta';
import { Navigation } from 'src/_libs/components/layout/navigation';

export const metadata: Metadata = {
  title: meta.TITLE,
  description: meta.DESCRIPTION,
  keywords: [
    '로스트아크',
    '로아',
    '로아 레이드',
    '로아 공대 도우미',
    '로아 공대 최적화',
    '공대 최적화',
    '로스트아크 공대 최적화',
  ],
  creator: '늉숭',
  publisher: '늉숭',
  openGraph: {
    title: meta.TITLE,
    description: meta.DESCRIPTION,
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content={COLORS.THEME} />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <Providers>
            <Navigation />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
