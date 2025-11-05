// src/routesConfig.js

import AddCourse from "./components/core/Dashboard/AddCourse"
import Cart from "./components/core/Dashboard/Cart"
import EditCourse from "./components/core/Dashboard/EditCourse"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import Instructor from "./components/core/Dashboard/Instructor"
import MyCourses from "./components/core/Dashboard/MyCourses"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"


// 🔓 Publicly accessible routes
export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/catalog/:catalogName", element: <Catalog /> },
  { path: "/courses/:courseId", element: <CourseDetails /> },
]

// 🚪 Routes for guests only (not logged-in users)
export const openRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/update-password/:id", element: <UpdatePassword /> },
  { path: "/verify-email", element: <VerifyEmail /> },
]

// 🧑‍💻 Common dashboard routes
export const dashboardCommonRoutes = [
  { path: "my-profile", element: <MyProfile /> },
  { path: "settings", element: <Settings /> },
]

// 👨‍🏫 Instructor-only dashboard routes
export const instructorRoutes = [
  { path: "instructor", element: <Instructor /> },
  { path: "my-courses", element: <MyCourses /> },
  { path: "add-course", element: <AddCourse /> },
  { path: "edit-course/:courseId", element: <EditCourse /> },
]

// 🧑‍🎓 Student-only dashboard routes
export const studentRoutes = [
  { path: "enrolled-courses", element: <EnrolledCourses /> },
  { path: "cart", element: <Cart /> },
]

// 🎥 Course viewing routes
export const viewCourseRoutes = [
  {
    path: "view-course/:courseId/section/:sectionId/sub-section/:subSectionId",
    element: <VideoDetails />,
  },
]

// ⚠️ Catch-all route
export const errorRoute = { path: "*", element: <Error /> }
