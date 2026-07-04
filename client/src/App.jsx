import "./index.css";
import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userslice";
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

export const ServerUrl = "http://localhost:8000";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${ServerUrl}/api/user/current-user`, {
          withCredentials: true,
        });
        console.log("Current user:", response.data.user);
        dispatch(setUserData(response.data.user));
      } catch (error) {
        if (error?.response?.status === 401) {
          console.log("No active session. Please sign in.");
          return;
        }
        console.error("Error fetching current user:", error);
        dispatch(setUserData(null)); // Clear user data on error
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>
    </Routes>
  );
}

export default App;
