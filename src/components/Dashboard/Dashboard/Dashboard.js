 import React from 'react';
 
 import Topbar from '../Topbar/Topbar';
 import Sidebar from '../Sidebar/Sidebar.js';
//  import MyPosts from '../MyPosts/MyPosts.js';
//  import AddPost from '../AddPost/AddPost.js';
 import AllUsers from '../AllUsers/AllUsers';
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
                 {/* <MyPosts /> */}
                 {/* <AddPost /> */}
                 <AllUsers />
             </div>
         </div>
     );
 };
 
 export default Dashboard; // to Home