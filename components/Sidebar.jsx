import { initFirebase } from "@/firebase";
import {
  closeLoginModal,
  closePasswordModal,
  closeSignupModal,
  openLoginModal,
} from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  faBookBookmark,
  faBookmark,
  faCircleQuestion,
  faGear,
  faHouse,
  faMagnifyingGlass,
  faPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Sidebar({ className }) {
  const app = initFirebase();
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const router = useRouter();
  const email = auth.currentUser?.email;

  const handleSignOut = () => {
    auth.signOut();
    dispatch(closeLoginModal());
    dispatch(closeSignupModal());
    dispatch(closePasswordModal());
    dispatch(signOutUser());
    router.push("/");
    console.log("logged out");
  };

  return (
    <>
      <div className="hidden md:block bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-screen z-50">
        <div className="flex items-center justify-center h-[60px] pt-[16px] max-w-[160px] mx-auto">
          <img
            className="w-full h-[40px] bg-transparent"
            src="/assets/logo.png"
          />
        </div>
        <div
          className={`flex flex-col justify-between sidebar__height ${className} pb-[20px] overflow-y-auto`}
        >
          <div className="flex-1 mt-[40px]">
            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="bg-lime-500 w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faHouse} />
              </div>
              <div>For You</div>
            </Link>

            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="bg-lime-500 w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faBookmark}
                />
              </div>
              <div>My Library</div>
            </Link>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faPen} />
              </div>
              <div>Highlights</div>
            </div>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/for-you"
            >
              {/* <div>style the green thing</div> */}
              <div className="w-[5px] h-full mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faMagnifyingGlass}
                />
              </div>
              <div>Search</div>
            </div>
          </div>

          <div>
            <Link
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faGear} />
              </div>
              <div>Settings</div>
            </Link>

            <div
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faCircleQuestion}
                />
              </div>
              <div>Help & Support</div>
            </div>

            <div
              onClick={handleSignOut}
              className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"
              href="/settings"
            >
              <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
              <div className="flex items-center justify-center mr-[8px]">
                <FontAwesomeIcon
                  className="w-[24px] h-[24px]"
                  icon={faRightFromBracket}
                />
              </div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
