import "./App.css";
import Playerprofile from "./profilePages/PlayerProfile.js";
import AdminProfile from "./profilePages/AdminProfile.js";
import OrganizerProfile from "./profilePages/OrganizerProfile.js";
import UpdatePlayerProfile from "./profilePages/UpdatePlayerProfile.js";
import UpdateOrganizerProfile from "./profilePages/UpdateOrganizerProfile";
import UpdateAdminProfile from "./profilePages/UpdateAdminProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playernavigationbar from "./bars/Playernavigationbar";
import Organizernavigationbar from "./bars/Organizernavigationbar";
import Adminnavigationbar from "./bars/Adminnavigationbar";
import Dashboard from "./profilePages/Dashboard";
import Requests from "./profilePages/requestsPage/Requests";
import OrganizeTournaments from "./profilePages/organizeTournamentsPage/OrganizeTournaments";
import OrganizedTournament from "./profilePages/organizeTournamentsPage/OrganizedTournament";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="player" element={<Playernavigationbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Playerprofile />} />
          
          <Route
            exact
            path="profileSettings"
            element={<UpdatePlayerProfile />}
          />
        </Route>
        <Route path="organizer" element={<Organizernavigationbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<OrganizerProfile />} />
          <Route path="tournaments" element={<OrganizeTournaments/>}/>
          <Route path="tournament/:userid" element={<OrganizedTournament/>}/>
          <Route
            exact
            path="profileSettings"
            element={<UpdateOrganizerProfile />}
          />

        </Route>

        <Route path="admin" element={<Adminnavigationbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="requests" element={<Requests/>}/>
          <Route
            exact
            path="profileSettings"
            element={<UpdateAdminProfile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
