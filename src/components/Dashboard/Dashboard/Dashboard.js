 import React from 'react';
 
 import Topbar from '../Topbar/Topbar';
 import Sidebar from '../Sidebar/Sidebar.js';
 import './Dashboard.scss';
 const Dashboard = () => {
     return (
         <div className="Dashboard">
             <div className="sidebarHolder">
                <Sidebar />
             </div>
             <div className="contentHolder">
                 <div className="topbarHolder">
                     <Topbar />
                 </div>
             </div>
         </div>
     );
 };
 
 export default Dashboard; // to Home