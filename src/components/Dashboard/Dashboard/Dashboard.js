 import React from 'react';
 
 import Topbar from '../Topbar/Topbar';
 import Sidebar from '../Sidebar/Sidebar.js';
 import MyPosts from '../MyPosts/MyPosts.js';
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
                 <MyPosts />
             </div>
         </div>
     );
 };
 
 export default Dashboard; // to Home