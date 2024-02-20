import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationViews"


export const Webpage = () => {
  return <div className="html">
    <Routes>
      <Route path="*" element={
        <>
          <ApplicationViews />
        </>

      } />
    </Routes>
  </div>
}
