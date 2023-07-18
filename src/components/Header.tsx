import imageUser from "../assets/img/user.svg";
import "../styles/base/header.css";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="header">
      <div className="header--account">
        <div className="header--account__image">
          <span>
            <img src={imageUser} />
          </span>
        </div>
        {session?.user ? (
          <div className="header--account__name">
            Welcome {session.user.name}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Header;
