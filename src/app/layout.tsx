import 'src/_libs/style/global.css';
import { Metadata } from 'next';
import { COLORS } from 'src/_libs/style/colors';

export const metadata: Metadata = {
  title: '로스트아크 공대 최적화',
  description: '로스트아크 공대 최적화',
  openGraph: {
    title: '로스트아크 공대 최적화',
    description: '로스트아크 공대 최적화',
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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
