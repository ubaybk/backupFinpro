import DetailUser from "../pages/detailUser";
import Dashboard from "../pages/dashboard";
import FollowingPost from "../pages/followingPost";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ExplorePost from "../pages/explorePost";
import ProtectedRoute from "./protectedRoute";

import MyFollowers from "../pages/myFollowers";
import MyFollowing from "../pages/myFollowing";


import PostCreate from "../pages/postCreate";
import FollowingUserId from "../pages/followingUserId";
// import { FollowingByUserIdContextProvider } from "../context/FollowingByUserIdContextProvider";
import FollowersUserId from "../pages/followersUserId";
import Story from "../pages/story";
import AddStory from "../pages/addStory";
import DetailExplore from "../pages/detailExplore";
import DetailPost from "../pages/detailPost";
// import StoryById from "../pages/storyById"
import UpdateUser from "../pages/updateUser";
import TestSeacrh from "../pages/testSearch";
import EditPost from "../pages/editPost";
import PublicRoute from "./publicRoute";


export const routes = [
  {
    path: "/",
    element:  <Home />,
  },
  {
    path: "/login",
    element: (
     
        <Login />
     
    )
    
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/followingpost",
    element: (
      <ProtectedRoute>
        <FollowingPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/detailuser/:userId",
    element: (
      <ProtectedRoute>
        <DetailUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/explorepost",
    element: (
        <ProtectedRoute>
            <ExplorePost/>
        </ProtectedRoute>
    )
  },
  {
    path: "/myfollowing",
    element: (
        <ProtectedRoute>
            <MyFollowing/>
        </ProtectedRoute>
    )
  },
  {
    path: "/myfollowers",
    element: (
        <ProtectedRoute>
            <MyFollowers/>
        </ProtectedRoute>
    )
  },
  {
    path: "/postcreate",
    element: (
        <ProtectedRoute>
            <PostCreate/>
        </ProtectedRoute>
    )
  },
  {
    path: "/followinguserid/:userId",
    element: (
        <ProtectedRoute>
         
            <FollowingUserId/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/followersuserid/:userId",

    element: (
        <ProtectedRoute>
         
            <FollowersUserId/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/story/:idStory",

    element: (
        <ProtectedRoute>
         
            <Story/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/addstory",

    element: (
        <ProtectedRoute>
         
            <AddStory/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/detailexplore",

    element: (
        <ProtectedRoute>
         
            <DetailExplore/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/detailpost/:userId",

    element: (
        <ProtectedRoute>
         
            <DetailPost/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/testsearch",

    element: (
        <ProtectedRoute>
         
            <TestSeacrh/>
          
        </ProtectedRoute>
    )
  },
  // {
  //   path: "/storybyid",

  //   element: (
  //       <ProtectedRoute>
         
  //           <StoryById/>
          
  //       </ProtectedRoute>
  //   )
  // },
  {
    path: "/updateuser",

    element: (
        <ProtectedRoute>
         
            <UpdateUser/>
          
        </ProtectedRoute>
    )
  },
  {
    path: "/editpost/:postId",

    element: (
        <ProtectedRoute>
         
            <EditPost/>
          
        </ProtectedRoute>
    )
  },
];
