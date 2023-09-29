import {
  closeLoginModal,
  closePasswordModal,
  closeSignupModal,
  openLoginModal,
  openPasswordModal,
  openSignupModal,
} from "@/redux/modalSlice";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function LoginModal() {
  const isLoginOpen = useSelector((state) => state.modals.loginModalOpen);
  const isSignupOpen = useSelector((state) => state.modals.signupModalOpen);
  const isPasswordOpen = useSelector((state) => state.modals.passwordModalOpen);

  const dispatch = useDispatch();
  const router = useRouter();

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSignup = async () => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginError("");
      console.log("loggedIn");
      router.push("/for-you");
    } catch (error) {
      setLoginError("Wrong email or password. Please try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      // Adding user details to redux slice
      dispatch(
        setUser({
          email: currentUser?.email,
          uid: currentUser?.uid,
        })
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="btn home__cta--btn"
      >
        Login
      </button>
      {isLoginOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal open={isLoginOpen} onClose={() => dispatch(closeLoginModal())}>
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Log in to Summarist
                  </div>
                  <button className="relative flex bg-[#3a579d] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                    <figure className="bg-transparent flex items-center justify-center w-[36px] h-[36px] rounded-[4px] absolute left-[2px]">
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
                    <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
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
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} className="btn">
                      <span>Login</span>
                    </button>
                    {loginError && (
                      <p className="text-red-500 mt-2">{loginError}</p>
                    )}
                  </form>
                </div>
                <div
                  onClick={() => {
                    dispatch(openPasswordModal());
                    dispatch(closeLoginModal());
                  }}
                  className="text-center text-[#116be9] font-light text-[14px] w-fit mt-0 mx-auto mb-[16px] cursor-pointer"
                >
                  Forgot your password
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(closeLoginModal());
                    dispatch(openSignupModal());
                  }}
                >
                  Don't have an account?
                </button>
                <div
                  onClick={() => dispatch(closeLoginModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {isSignupOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal
            open={isSignupOpen}
            onClose={() => dispatch(closeSignupModal())}
          >
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Sign up to Summarist
                  </div>
                  <button className="relative flex bg-[#4285f4] text-white justify-center w-full h-[40px] rounded-[4px] text-[16px] items-center min-w-[180px]">
                    <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-[4px] bg-white absolute left-[2px]">
                      <img
                        className="w-[24px] h-[24px]"
                        src="/assets/google.png"
                        alt=""
                      />
                    </figure>
                    <div>Sign up with Google</div>
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
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <button onClick={handleSignup} className="btn">
                      <span>Sign up</span>
                    </button>
                  </form>
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(openLoginModal());
                    dispatch(closeSignupModal());
                  }}
                >
                  Already have an account?
                </button>
                <div
                  onClick={() => dispatch(closeSignupModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {isPasswordOpen && (
        <div className="flex justify-center items-center w-full">
          <Modal
            open={isPasswordOpen}
            onClose={() => dispatch(closePasswordModal())}
          >
            <div className="flex justify-center items-center mt-[175px] flex-col fixed md:w-[35%] w-full md:ml-[35%] ml-0">
              <div className="relative max-w-[400px] w-full bg-white rounded-lg shadow-sm">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                  <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                    Reset your password
                  </div>
                  <form className="flex flex-col gap-[16px]">
                    <input
                      className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                      type="text"
                      placeholder="Email Address"
                      onChange={(e) => setResetPasswordEmail(e.target.value)}
                    />
                    <button
                      // onClick={handleLogin}
                      className="btn"
                    >
                      <span>Send reset password link</span>
                    </button>
                  </form>
                </div>
                <button
                  className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]"
                  onClick={() => {
                    dispatch(openLoginModal());
                    dispatch(closePasswordModal());
                  }}
                >
                  Go to login
                </button>
                <div
                  onClick={() => dispatch(closePasswordModal())}
                  className="absolute top-[12px] right-[12px] flex cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="h-[28px] w-[28px]"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
