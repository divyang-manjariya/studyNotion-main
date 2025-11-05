import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import ViewCourse from "./pages/ViewCourse"
import {
  dashboardCommonRoutes,
  errorRoute,
  instructorRoutes,
  openRoutes,
  publicRoutes,
  studentRoutes,
  viewCourseRoutes,
} from "./routesConfig"
import { getUserDetails } from "./services/operations/profileAPI"
import { ACCOUNT_TYPE } from "./utils/constants"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) dispatch(getUserDetails(JSON.parse(token), navigate))
  }, [dispatch, navigate])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar />
      <Routes>
        {/* ✅ Public Routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* 🔓 Open Routes (only for non-logged-in users) */}
        {openRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<OpenRoute>{element}</OpenRoute>}
          />
        ))}

        {/* 🔒 Private Routes (Dashboard) */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {dashboardCommonRoutes.map(({ path, element }) => (
            <Route key={path} path={`dashboard/${path}`} element={element} />
          ))}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR &&
            instructorRoutes.map(({ path, element }) => (
              <Route key={path} path={`dashboard/${path}`} element={element} />
            ))}

          {user?.accountType === ACCOUNT_TYPE.STUDENT &&
            studentRoutes.map(({ path, element }) => (
              <Route key={path} path={`dashboard/${path}`} element={element} />
            ))}
        </Route>

        {/* 🎥 View Course Routes (Students only) */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT &&
            viewCourseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>

        {/* ⚠️ 404 Error */}
        <Route path={errorRoute.path} element={errorRoute.element} />
      </Routes>
    </div>
  )
}

export default App
