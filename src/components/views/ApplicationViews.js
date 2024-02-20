import { NavBar } from "../nav/NavBar"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { AboutPage } from "../pages/about"
import { TeachingPage } from "../pages/teaching"
import { JuniperPage } from "../pages/juniper"
import { MediaPage } from "../pages/media"
import { MediaPage2 } from "../pages/media2"


export const ApplicationViews = () => {

    return <>
        <NavBar />
        <Routes>

            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teach" element={<TeachingPage />} />
            <Route path="/juniper" element={<JuniperPage />} />
            <Route path="/media" element={<MediaPage2 />} />


        </Routes>
    </>
}