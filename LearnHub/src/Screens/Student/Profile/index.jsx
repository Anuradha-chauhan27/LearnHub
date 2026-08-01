import { useState } from "react";
import "../../../assets/css/profile.css";

import { ProfileInfo } from "./ProfileInfo";
import { Certificate } from "./Certificate";
import { Progress } from "./Progress";
import { Streak } from "./Streak";
import { Wishlist } from "./Wishlist";
import Footer from "../../../Components/Footer";
import {Navb } from '../../../Components/Navb'

export const Profile=()=> {
  const [active, setActive] = useState("profile");

  return (
    <>
    <Navb/>
    <div className="profile-page">

      <div className="sidebar">

        <h2>LearnHub</h2>

        <button
          className={active === "profile" ? "active" : ""}
          onClick={() => setActive("profile")}
        >
          👤 Profile
        </button>

        <button
          className={active === "progress" ? "active" : ""}
          onClick={() => setActive("progress")}
        >
          📈 Progress
        </button>

        <button
          className={active === "wishlist" ? "active" : ""}
          onClick={() => setActive("wishlist")}
        >
          ❤️ Wishlist
        </button>

        <button
          className={active === "streak" ? "active" : ""}
          onClick={() => setActive("streak")}
        >
          🔥 Streak
        </button>

        <button
          className={active === "certificate" ? "active" : ""}
          onClick={() => setActive("certificate")}
        >
          🏆 Certificates
        </button>

      </div>

      <div className="content">

        {active === "profile" && <ProfileInfo />}
        {active === "progress" && <Progress />}
        {active === "wishlist" && <Wishlist />}
        {active === "streak" && <Streak />}
        {active === "certificate" && <Certificate />}

      </div>

    </div>
    <Footer/>
    </>
  );
}