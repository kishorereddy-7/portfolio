import "@innovaccer/design-system/css/dist/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import RootLayout from "./components/rootlayout/RootLayout";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorMessage />,
    children: [
      { path: "/", element: <Intro /> },
      { path: '/home', element: <Intro /> },
      { path: "/about", element: <About /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
