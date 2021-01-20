import "@styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";

function Application({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default Application;
