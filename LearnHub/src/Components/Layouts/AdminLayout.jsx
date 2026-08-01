import { Outlet } from "react-router-dom";
import {SideBar} from '../Admin/SideBar'
import {TopBar} from "../Admin/TopBar";
import "../../assets/css/admin.css";

export const AdminLayout = () => {
  return (
    <div className="admin-layout">

      <SideBar />

      <div className="admin-main">

        <TopBar />

        <div className="admin-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

