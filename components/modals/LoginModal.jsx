import {
  closeLoginModal,
  openLoginModal,
  openSignupModal,
} from "@/redux/modalSlice";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useState } from "react";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="btn home__cta--btn"
      >
        Login
      </button>

      <div className="flex justify-center items-center w-full">
        <Modal open={isOpen} onClose={() => dispatch(closeLoginModal())}>
          <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
            <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
              <div className="pt-[48px] px-[32px] pb-[24px]">
                <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                  Log in to Summarist
                </div>
                <button className="relative flex bg-[#3a579d] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                  <figure className="bg-transparent">
                    <FontAwesomeIcon
                      className="w-[24px] h-[24px]"
                      icon={faUser}
                    />
                  </figure>
                  <div>Login as Guest</div>
                </button>
                <div className="flex items-center my-[16px]">
                  <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                  <span className="mx-[24px] text-[14px] text-[#394547] font-medium">
                    or
                  </span>
                  <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                </div>
                <button className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                  <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolue left-[2px]">
                    <img
                      className="w-[24px] h-[24px]"
                      src="/assets/google.png"
                      alt=""
                    />
                  </figure>
                  <div>Login with Google</div>
                </button>
                <div className="flex items-center my-[16px]">
                  <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                  <span className="mx-[24px] text-[14px] text-[#394547] font-medium">
                    or
                  </span>
                  <div className="block grow h-[1px] bg-[#bac8ce]"></div>
                </div>
                <form className="flex flex-col gap-[16px]">
                  <input
                    className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={handleLogin} className="btn">
                    <span>Login</span>
                  </button>
                </form>
              </div>
              <div className="text-center text-[#116be9] font-light text-[14px] w-fit mt-0 mx-auto mb-[16px] cursor-pointer">
                Forgot your password
              </div>
              <button
                className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                // onClick={() => {
                //   dispatch(closeLoginModal());
                //   dispatch(openSignupModal());
                // }}
                onClick={() => {
                  dispatch(openSignupModal());
                  dispatch(closeLoginModal());
                }}
              >
                Don't have an account?
              </button>
              <div
                onClick={() => dispatch(closeLoginModal())}
                className="absolute top-[12px] right-[12px] flex cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} className="h-[28px] w-[28px]" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
