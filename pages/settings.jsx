import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { initFirebase } from "@/firebase";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Settings() {
  const app = initFirebase();
  const auth = getAuth(app);
  const email = auth.currentUser?.email;

  const isPremium = useSelector((state) => state.user.premium);
  const subscriptionType = useSelector((state) => state.user.type);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <SearchBar />
        <div className="container">
          <div className="row">
            <div className="settings__title">Settings</div>
            <div className="settings__content">
              <div className="settings__subtitle">Your Subscription Plan</div>
              <div className="settings__text">{subscriptionType}</div>
              {!isPremium ? null : (
                <Link href="/choose-plan" className="settings__button">
                  Upgrade to Premium
                </Link>
              )}
            </div>
            <div className="settings__account">
              <div className="settings__account-title">Email</div>
              <div className="settings__account-email">{email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
