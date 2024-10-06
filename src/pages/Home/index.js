import React from "react";

import { Route, Routes } from "react-router-dom";

import News from "../News";

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'skyblue', padding: 10 }}>
                This is Home Page
                <Routes>
                    <Route path="/home/news" element={<News />} />
                </Routes>
            </div>
        )
    }
}
