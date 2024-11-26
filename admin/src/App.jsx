import React from "react";
import { Route, Routes } from "react-router-dom";
import { SingUp } from "./pages/sing-up/sing-up";
import { SingIn } from "./pages/sing-in/sing-in";
import { MainLayout } from "./layout/main-layout";
import { Dashbort } from "./pages/dashbort/dashbort";
import { Statistika } from "./pages/statistika/statistika";
import { SotuvBulimi } from "./pages/sotuv-bulimi/sotuv-bulimi";
import { Bino } from "./pages/bino/bino";
import { BinoMalumot } from "./components/bino-malumot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Dashbort/>}/>
          <Route path="statistics" element={<Statistika/>} />
          <Route path="sales" element={<SotuvBulimi/>}/>
          <Route path="bino" element={<Bino/>}/>
          <Route path="malumot/:id" element={<BinoMalumot/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
