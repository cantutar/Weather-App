import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DarkModeProvider from "../store/darkmode-context";
import "../styles/Index.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
