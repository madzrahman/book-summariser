import "@/styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCrown, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

library.add(faCrown, faStar, faStarHalf);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
