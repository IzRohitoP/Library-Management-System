import ReactDOM from "react-dom/client";
import App from "./component/App";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import UserLogin from "./component/UserLogin";
import UserHome from "./component/UserHome";
import AdminHome from "./component/AdminHome";
import Maintenance from "./component/Maintenance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/login" element={<UserLogin />} />
      <Route path="/userhomepage" element={<UserHome />} />
      <Route path="/adminhomepage" element={<AdminHome />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
