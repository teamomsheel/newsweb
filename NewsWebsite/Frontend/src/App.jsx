import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./Layout/MainPage";
import Admindashboard from "./Pages/AdminDashboard/Admindashboard";
import Login from "./Pages/Login/Login";
import ProtuctDashboard from "./Pages/RoleBased/ProtuctDashboard";
import Rolebase from "./Pages/RoleBased/Rolebase";
import Unable from "./Pages/Login/Unable";
import AddWriters from "./Components/AddWriter";
import Writers from "./Components/Writers";
import News from "./Components/News";
import Profile from "./Components/Profile";
import WriterIndex from "./Components/WriterIndex";
import CreateNews from "./Components/CreateNews";
import decode_token from "./Data";
import EditNews from "./Components/EditNews";
import Magazine from "./Components/Magazine";
import LiveVideoUpload from "./Components/AdminVideoUploader"
import AdminVideoUploader from "./Components/AdminVideoUploader";
import MagazineTable from "./Pages/AdminDashboard/MagazineTable";
function App() {
  const token = localStorage.getItem("newToken");
  const userInfo = decode_token(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtuctDashboard />}>
          <Route element={<MainPage />}>
            <Route
              index
              element={
                userInfo?.role === "admin" ? (
                  <Navigate to="/dashboard/admin" />
                ) : userInfo?.role === "writer" ? (
                  <Navigate to="/dashboard/writer" />
                ) : (
                  <Navigate to="/dashboard/unable-access" />
                )
              }
            />
            <Route path="unable-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />

            <Route element={<Rolebase role="admin" />}>
              <Route path="admin" element={<Admindashboard />} />
              <Route path="writer/add" element={<AddWriters />} />
              <Route path="writers" element={<Writers />} />
              <Route path="magazine" element={<Magazine />}/>
              <Route path="/dashboard/magazineTable" element={<MagazineTable />}/>
              <Route path="live-video/upload" element={<AdminVideoUploader />} />
            </Route>

            <Route element={<Rolebase role="writer" />}>
              <Route path="writer" element={<WriterIndex />} />
              <Route path="news/create" element={<CreateNews />} />
              <Route path="news/edit/:news_id" element={<EditNews/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
