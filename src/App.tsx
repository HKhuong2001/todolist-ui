import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import routeClient from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {routeClient.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;
            return (
              <Route
                key={index}
                element={
                  <Layout>
                    {" "}
                    <Page></Page>{" "}
                  </Layout>
                }
                path={route.path}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
