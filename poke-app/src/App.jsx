import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokemonListPage } from "./pages/PokemonListPage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;