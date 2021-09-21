import artsyOlive from "../images/project-artsy-olive.jpg";
import magazineCovers from "../images/project-magazine-covers.jpg";
import moscatoWine from "../images/project-moscato.jpg";
import ssPrints from "../images/project-ss-prints.jpg";
import woodMill from "../images/project-woodmill-cabinetry.jpg";
import yogaLauren from "../images/project-yoga.jpg";
import project501Cio from "../images/project-501cio.jpg"

const PROJECTS = [
  {
    id: 0,
    title: "Artsy Olive",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: artsyOlive,
    featured: true,
    type: ["branding"]
  },
  {
    id: 1,
    title: "Magazine Covers",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: magazineCovers,
    featured: false,
    type: ["layout"]
  },
  {
    id: 2,
    title: "Moscato Wine Bar & Tasting",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: moscatoWine,
    featured: true,
    type: ["branding"]
  },
  {
    id: 3,
    title: "SS Prints-Plus",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: ssPrints,
    featured: false,
    type: ["web-design", "web-development"]
  },
  {
    id: 4,
    title: "WoodMill Cabinetry",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: woodMill,
    featured: true,
    type: ["branding"]
  },
  {
    id: 5,
    title: "Yoga with Lauren Director",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: yogaLauren,
    featured: true,
    type: ["branding", "layout"]
  },
  {
    id: 6,
    title: "501Cio",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: project501Cio,
    featured: false,
    type: ["web-design"]
  },
];

export default PROJECTS;
