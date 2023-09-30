import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <>
      <div className="bg-white border-b-[1px] border-solid border-[#e1e7ea] h-[80px] z-[1]">
        <div className="relative flex items-center justify-between px-[32px] max-w-[1070px] mx-auto h-full">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="flex items-center gap-[24px] max-w-[340px] w-full">
            <div className="flex items-center w-full">
              <div className="flex items-center w-full relative gap-[8px]">
                <input
                  className="h-[40px] w-full px-[16px] bg-[#f1f6f4] text-[#042330] border-[2px] border-solid border-[#e1e7ea] rounded-[8px]"
                  placeholder="Search for books"
                  type="text"
                />
                <div className="flex items-center absolute h-full right-[8px] justify-end border-l-[2px] border-solid border-[#e1e7ea] pl-[8px]">
                  <FontAwesomeIcon
                    className="w-[24px] h-[24px] text-[#03314b]"
                    icon={faMagnifyingGlass}
                  />
                </div>
              </div>
            </div>
            <div className="hidden burger__menu items-center justify-center cursor-pointer">
              <FontAwesomeIcon className="w-[24px] h-[24px]" icon={faBars} />
            </div>
            <div className="hidden cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
