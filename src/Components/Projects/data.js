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

export default [
  {
    id: 1,
    bgColor: "#F54748",
    icon: recipehub,
    title: "RecipeHub",
    desc:
      "RecipeHub is your ultimate destination for culinary inspiration and delicious creations. From quick and easy weeknight meals to gourmet delights for special occasions.",
  },
  {
    id: 2,
    bgColor: "#7952B3",
    icon: novashop,
    title: "NovaShop-Ecommerce",
    desc:
      "Novashop is an e-commerce platform designed to provide a seamless shopping experience."
  },
  {
    id: 3,
    bgColor: "#1597BB",
    icon: crypto,
    title: "Crypto Tracker",
    desc:
      "Crypto Tracker is a web application designed to help users monitor the latest trends and prices in the cryptocurrency market. "
  },
  {
    id: 4,
    bgColor: "#185ADB",
    icon: `<FontAwesomeIcon icon={faFootballBall} size="3x" />`,
    title: "Lorem Ipsum",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
  
];
