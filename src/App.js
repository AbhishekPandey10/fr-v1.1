import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import MyCalendar from "./pages/calender/MyCalendar";
import Chats from "./pages/chats/Chats";
import Groups from "./pages/groups/Groups";
import Resources from "./pages/resources/Resources";
import Questions from "./pages/questions/Questions";
import Job from "./pages/jobs/Jobs";
import Courses from "./pages/courses/Courses";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from "./pages/settings/Settings";
import Accommodation from "./pages/accommodation/Accommodation";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<MyCalendar />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/accommoodation" element={<Accommodation />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
