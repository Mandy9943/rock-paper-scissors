import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet titleTemplate="%s - React Games" defaultTitle="React Games">
          <meta name="description" content="Games develop by Armanmdo Martin" />
        </Helmet>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
