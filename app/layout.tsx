import '@/app/ui/global.css';
import { pretenddard } from '@/app/ui/fonts';
// 모듈은 @경로를 사용하는게 좋음

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretenddard.className}>{children}</body>
    </html>
  );
}
