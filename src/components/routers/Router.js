import React from "react";
import { Routes, Route} from "react-router-dom";
import Page2 from '../pages/Page2';
import MyApp from '../pages/MyApp';


const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<MyApp />} />
            
            <Route path="page2/:count" element={<Page2 />} />
        </Routes>
    );
}

export default Router;