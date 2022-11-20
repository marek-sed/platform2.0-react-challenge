import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
