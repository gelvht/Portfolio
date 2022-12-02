import { IData } from "./dataType";

import blockchain from "../public/blockchain.png";
import qtwitter from "../public/qtwitter.png";
import sepehrAcademy from "../public/sepehrAcademy.png";

export const projectList: IData[] = [
  {
    id: 1,
    image: blockchain,
    name: "Blockchain Scan",
    technologies: "React - TypeScript - Sass - Bootstrap",
    link: "https://github.com/gelvht/blockchain-scan",
  },
  {
    id: 2,
    image: qtwitter,
    name: "twitter clone",
    technologies: "React - JavaScript - Bootstrap",
    link: "https://github.com/gelvht/twitter-clone",
  },
  {
    id: 3,
    image: sepehrAcademy,
    name: "Sepehr Academy",
    technologies: "Next js - TypeScript - Bootstrap - Sass",
    link: "https://github.com/nima-abbasi/Sepehr-Academy",
  },
];
