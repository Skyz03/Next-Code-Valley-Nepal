import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import 'swiper/css/bundle';
import './globals.css';

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
