import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faDragon,
  faFootballBall,
  faGlassCheers,
  faHelicopter
} from "@fortawesome/free-solid-svg-icons";

import recipehub from "../../assets/recipesite-light.png";
import crypto from "../../assets/cryptotracker.png";
import novashop from "../../assets/novashop.png";
import pixelpulse from "../../assets/pixelpulse.png";
import dream from "../../assets/dreammusic.png";

export default [
  {
    id: 1,
    bgColor: "rgb(40, 134, 40)",
    icon: dream,
    title: "DreamMusic",
    url: "https://dream-music-react-js.vercel.app/",
    desc:
      "RecipeHub is your ultimate destination for culinary inspiration and delicious creations. From quick and easy weeknight meals to gourmet delights for special occasions.",
  },
  {
    id: 2,
    bgColor: "#7952B3",
    icon: novashop,
    title: "NovaShop-Ecommerce",
    url : "https://novashop-ecommerce.vercel.app/",
    desc:
      "Novashop is an e-commerce platform designed to provide a seamless shopping experience."
  },
  {
    id: 3,
    bgColor: "#1597BB",
    icon: crypto,
    title: "Crypto Tracker",
    url: "https://crypto-tracker-eight-iota.vercel.app/",
    desc:
      "Crypto Tracker is a web application designed to help users monitor the latest trends and prices in the cryptocurrency market. "
  },
  {
    id: 4,
    bgColor: "rgb(230, 71, 71)",
    icon: pixelpulse,
    title: "PixelPulse",
    url: "https://pixel-pulse-three.vercel.app/",
    desc:
      "PixelPulse transforms text into a captivating visual experience. Watch as characters flow seamlessly across a dynamic grid, with each letter rendered as a pixelated pattern. "
  }
  
];
