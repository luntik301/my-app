import { removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const { email, isAuth } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(removeUser());
        window.location.reload();
    };
    return <button onClick={handleLogout}>Выйти из {email}</button>
};

export default LogoutButton;