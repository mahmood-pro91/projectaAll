

import {NotificationsNone} from '@mui/icons-material';
import "./topbar.css";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from "/home/mahmoud/Documents/projects/React/admindashboard/public/istockphoto-623430378-612x612.jpg"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbar-container">
            <div className="topbar-left">
               <h1 className="heading">Maximum Admin</h1>
            </div>
            <div className="topbar-right">
                <div>
                    <NotificationsNone />
                </div>
                <div>
                    <LanguageIcon/>
                </div>
                <div>
                <SettingsIcon/>
                </div>
                <div>
                    <img src={avatar} alt="user" className="topbar-right-img" />
                </div>
            </div>
        </div>
      
    </div>
  );
}   