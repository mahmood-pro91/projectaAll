import "./sidebar.css";
import { Inventory2Rounded,AttachMoneyRounded,AssessmentRounded, HomeRounded,TimelineRounded,TrendingUpRounded,AccountBoxRounded  } from '@mui/icons-material';
import { MailOutlineRounded,DynamicFeedRounded,ChatBubbleOutlineRounded } from '@mui/icons-material';
import { WorkOutlineRounded,ReportRounded } from "@mui/icons-material"


export default function Sidebar() {
    return (
        <div className="sidebar">
            {/* Sidebar content */}
            <Dashboard />
            <QuickMenu/>
            <Notifications />
            <Staff />
        </div>
    );
}


function Dashboard(){
    return(
        <div className="sidebar-wrapper">
        <div className="sidebar-menu">
            <h3 className="sidebar-title">Dashboard</h3>
            <ul className="sidebar-list">
                <li className="li-item">
                    <HomeRounded/>
                    Home
                </li>
                <li className="li-item">
                    <TimelineRounded/>
                    Analytic
                </li>
                <li className="li-item">
                    <TrendingUpRounded/>
                    Sales
                </li>
            </ul>
        </div>
      </div>
    )
}

function QuickMenu(){
    return(
        <div className="sidebar-wrapper">
        <div className="sidebar-menu">
            <h3 className="sidebar-title">Quick Menu</h3>
            <ul className="sidebar-list">
                <li className="li-item">
                    <AccountBoxRounded/>
                    Users
                </li>
                <li className="li-item">
                    
                    <Inventory2Rounded/>
                    Products
                </li>
                <li className="li-item">
                    <AttachMoneyRounded/>
                    Transactions
                </li>
                <li className="li-item">
                    <AssessmentRounded/>
                    Reports    
                </li>
            </ul>
        </div>
      </div>
    )
}

function Notifications(){
    return(
        <div className="sidebar-wrapper">
        <div className="sidebar-menu">
            <h3 className="sidebar-title">Notifications</h3>
            <ul className="sidebar-list">
                <li className="li-item">
                <MailOutlineRounded/>
                Mail
                </li>
                <li className="li-item">
                    <DynamicFeedRounded/>
                    Feedback
                </li>
                <li className="li-item">
                    <ChatBubbleOutlineRounded/>
                    Messages
                </li>
            </ul>
        </div>
      </div>
    )
}

function Staff(){
    return(
        <div className="sidebar-wrapper">
        <div className="sidebar-menu">
            <h3 className="sidebar-title">Staff</h3>
            <ul className="sidebar-list">
                <li className="li-item">
                    <WorkOutlineRounded/>
                    Staff Management
                </li>
                <li className="li-item">
                <TimelineRounded/>
                Analytics
                </li>
                <li className="li-item">
                    <ReportRounded/>
                    Reports
                </li>
            </ul>
        </div>
      </div>
    )
}
