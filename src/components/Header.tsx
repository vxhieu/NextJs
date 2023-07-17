
import imageUser from '../assets/img/user.svg'
import "../styles/base/header.css"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Header = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status === "authenticated") {
        router.push("/");
    }
    return (
        <div className="header">
            <div className="header--account">
                <div className="header--account__image">
                    <span>
                        <img src={imageUser} />
                    </span>
                </div>
                <div className="header--account__name">Welcome {session.user.name}</div>
            </div>
        </div>
    )
}
export default Header;
