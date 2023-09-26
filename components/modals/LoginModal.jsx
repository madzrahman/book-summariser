import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import { faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="btn home__cta--btn"
      >
        Login
      </button>

      <Modal open={isOpen} onClose={() => dispatch(closeLoginModal())}>
        <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 flex-col">
          <div className="relative max-w-[400px] bg-white rounded-lg shadow-sm">
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
                />
                <input
                  className="h-[40px] border-[2px] border-solid border-[#bac8ce]rounded-[4px] text-[#394547] px-[12px]"
                  type="text"
                  placeholder="Password"
                />
                <button className="btn">
                  <span>Login</span>
                </button>
              </form>
            </div>
            <div className="text-center text-[#116be9] font-light text-[14px] w-fit mt-0 mx-auto mb-[16px] cursor-pointer">
              Forgot your password
            </div>
            <button className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-[4px] font-light text-[16px]">
              Don't have an account?
            </button>
            <div
              onClick={() => dispatch(closeLoginModal())}
              className="absolute top-[12px] right-[12px] flex cursor-pointer"
            >
              <FontAwesomeIcon icon={faX} className="h-[28px] w-[28px]" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
