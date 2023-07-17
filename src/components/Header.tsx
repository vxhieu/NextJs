import imageUser from "../assets/img/user.svg";
import "../styles/base/header.css";
// import { useSession } from "next-auth/client"
// import { useRouter } from "next/navigation";
const Header = () => {
  // const [session, loading] = useSession()
  //   const router = useRouter();
  // if (session) {
  //     router.push("/");
  // }
  return (
    <div className="header">
      <div className="header--account">
        <div className="header--account__image">
          <span>
            <img src={imageUser} />
          </span>
        </div>
        <div className="header--account__name">Welcome {}</div>
      </div>
    </div>
  );
};
export default Header;
