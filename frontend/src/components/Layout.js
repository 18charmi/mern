import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          maxWidth: "1440px",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <Outlet />
      </div>
      {/* <div>Footer</div> */}
    </div>
  );
}
