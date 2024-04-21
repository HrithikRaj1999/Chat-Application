import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();
  return (
    <div className="mt-auto">
      <div>
        {!loading ? (
          <BiLogOutCircle
            className="w-6 h-6 text-white cursor-pointer hover:w-8 hover:h-8"
            onClick={logout}
            title={`Logout from ${authUser.fullName}`}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
      <span>{authUser.fullName}</span>
    </div>
  );
};
export default Footer;
