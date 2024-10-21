import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ProfileNav () {
    const navigate = useNavigate();
    return (
        <div className="absolute w-full h-12 flex items-center border border-gray-500 rounded-md px-4">
            <h1 className="mr-4">Profile</h1>
            <Button
                variant='link'
                onClick={() => navigate("/profile")}
            >
                My Profile
            </Button>
            <Button
                variant='link'
                onClick={() => navigate("/profile/my-products")}
            >
                My Products
            </Button>
            <Button
                variant='link'
                onClick={() => navigate("/profile/my-orders")}
            >
                My Orders
            </Button>
        </div>
    )
}