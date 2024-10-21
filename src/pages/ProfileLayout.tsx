import { Outlet } from "react-router-dom"
import { ProfileNav } from "../components/ProfileNav"

const ProfileLayout = () => {
  return (
    <div className="relative w-full flex">
        <ProfileNav />
        <div className="w-full pt-16">
            <Outlet />
        </div>
    </div>
  )
}

export default ProfileLayout