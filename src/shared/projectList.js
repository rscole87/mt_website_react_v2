import artsyOlive from "../images/project-artsy-olive.jpg";
import logoAo from "../images/artsy_olive/logo-ao.png";
import mockupLaptopAo from "../images/artsy_olive/mockup-laptop.png";
import mockupPackagingAo from "../images/artsy_olive/mockup-packaging.png";

import magazineCovers from "../images/project-magazine-covers.jpg";
import mockupAllMags from "../images/magazine_covers/mockup-all-mags.png";
import mockupMag1 from "../images/magazine_covers/mockup-mag1.png";
import mockupMag2 from "../images/magazine_covers/mockup-mag2.png";
import mockupMag3 from "../images/magazine_covers/mockup-mag3.png";

import moscatoWine from "../images/project-moscato.jpg";
import logoMoscato from "../images/moscato/logo-moscato.png";
import mockupBagMoscato from "../images/moscato/mockup-bag.png";
import mockupMenuMoscato from "../images/moscato/mockup-menu.png";
import mockupWindowMoscato from "../images/moscato/mockup-window-vinyl.png";

import ssPrints from "../images/project-ss-prints.jpg";
import layoutSsprints from "../images/ss_prints_plus/layout-page-ssp.png";
import mockupIpadSsp from "../images/ss_prints_plus/mockup-ipad.png";
import mockupLaptopSsp from "../images/ss_prints_plus/mockup-laptop.png";

import woodMill from "../images/project-woodmill-cabinetry.jpg";
import mockupCardsWc from "../images/woodmill_cabinetry/mockup-cards.png";
import mockupShirtWc from "../images/woodmill_cabinetry/mockup-shirt.png";
import mockupStationaryWc from "../images/woodmill_cabinetry/mockup-stationary.png";
import mockupWoodWc from "../images/woodmill_cabinetry/mockup-wood-burn.png";

import yogaLauren from "../images/project-yoga.jpg";
import logoYwl from "../images/yoga_lauren/logo-ywl.png";
import mockupCardYwl from "../images/yoga_lauren/mockup-card.png";
import mockupMenuYwl from "../images/yoga_lauren/mockup-menu.png";

import project501Cio from "../images/project-501cio.jpg"
import layoutPage501 from "../images/501cio/layout-page.png";
import mockupDesktop501 from "../images/501cio/mockup-desktop.png";
import mockupIpad501 from "../images/501cio/mockup-ipad.png";

const PROJECTS = [
  {
    id: 0,
    title: "Artsy Olive",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    featureImage: artsyOlive,
    featured: true,
    type: ["branding"],
    images: [mockupPackagingAo, logoAo, mockupLaptopAo],
    headerImg: logoAo
  },
  {
    id: 1,
    title: "Layout Design: Magazines",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    featureImage: magazineCovers,
    featured: true,
    type: ["layout"],
    images: [mockupMag1, mockupMag2, mockupMag3, mockupAllMags],
    headerImg: mockupAllMags
  },
  {
    id: 2,
    title: "Moscato Wine Bar & Tasting",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    featureImage: moscatoWine,
    featured: true,
    type: ["branding"],
    images: [mockupWindowMoscato, mockupBagMoscato, mockupMenuMoscato, logoMoscato],
    headerImg: logoMoscato
  },
  {
    id: 3,
    title: "SS Prints-Plus",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    featureImage: ssPrints,
    featured: true,
    type: ["web-design", "web-development"],
    images: [mockupLaptopSsp, mockupIpadSsp, layoutSsprints],
    headerImg: layoutSsprints
  },
  {
    id: 4,
    title: "WoodMill Cabinetry",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    featureImage: woodMill,
    featured: true,
    type: ["branding"],
    images: [mockupCardsWc, mockupShirtWc, mockupStationaryWc, mockupWoodWc],
    headerImg: mockupWoodWc
  },
  {
    id: 5,
    title: "Yoga with Lauren Director",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    featureImage: yogaLauren,
    featured: true,
    type: ["branding", "layout"],
    images: [mockupCardYwl, mockupMenuYwl, logoYwl],
    headerImg: logoYwl
  },
  {
    id: 6,
    title: "501Cio",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    featureImage: project501Cio,
    featured: true,
    type: ["web-design"],
    images: [mockupDesktop501, mockupIpad501, layoutPage501],
    headerImg: layoutPage501
  },
];

export default PROJECTS;
