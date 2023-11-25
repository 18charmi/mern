import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import { useAuthContext } from "./hook/useAuthContext";

// /* <RouterProvider router={router} /> */
// const router = createBrowserRouter(
//   createRoutesFromElements([
//     <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="signup" element={<Signup />} />
//     </Route>,
//     <Route path="/test">
//       <Route index element={<Home />} />
//     </Route>,
//   ])
// );
function App() {
  const { user, isLoaded } = useAuthContext();

  if (!isLoaded) return <></>;
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
