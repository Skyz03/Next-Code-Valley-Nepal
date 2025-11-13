import Script from "next/script";
import Cursor from "@/components/common/Cursor";
import Loader from "@/components/common/Loader";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Navbar from "@/components/home_2/Navbar";
import Menu from "@/components/home_2/Menu";
import Footer from "@/components/home_2/Footer";
import Header from "@/components/inner_pages/Header";
import ProjectDetSec from "@/components/inner_pages/project_det/ProjectDetSec";
import Related from "@/components/inner_pages/project_det/Related";

export const metadata = {
  title: "nucaz",
  icons: {
    icon: "/landing_page/assets/img/fav.png",
    shortcut: "/landing_page/assets/img/fav.png",
    other: generateStylesheetObject([
      "/common/assets/css/lib/bootstrap.min.css",
      "https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "/common/assets/css/lib/all.css",
      "/common/assets/css/lib/themify-icons.css",
      "/common/assets/css/lib/animate.css",
      "/common/assets/css/lib/jquery.fancybox.css",
      "/common/assets/css/lib/lity.css",
      "/common/assets/css/common_style.css",
      "/home_2/assets/css/home_2_style.css",
      "/inner_pages/assets/css/inner_pages.css",
    ]),
  },
};
export default function Home() {
  return (
    <body className='home-st1 inner-pages-st1 shop-det-pg-st1'>
      <Cursor />
      <Loader />
      <Menu />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <Navbar st={"tc-navbar-st1"} logo={"home_2"} />
          <Header title={"Case Details"} />
          <main>
            <ProjectDetSec />
            <Related />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src='/common/assets/js/ScrollTrigger.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/common/assets/js/ScrollSmoother.min.js'
        strategy='beforeInteractive'
      />
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/plugins.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/TweenMax.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/charming.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/countdown.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/gsap.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/splitting.min.js'
      ></Script>
      <Script
        strategy='beforeInteractive'
        src='/common/assets/js/isotope.pkgd.min.js'
      ></Script>
      {/* <Script
        src="/common/assets/js/smoother-script.js"
        strategy="lazyOnload"
      /> */}
      <Script strategy='lazyOnload' src='/common/assets/js/scripts.js'></Script>{" "}
    </body>
  );
}
