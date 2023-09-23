import { SearchIcon } from "@heroicons/react/solid";

export default function Search() {
  return (
    <>
      <div className="bg-white border-solid border-gray-300 h-[80px] z-10">
        <div className="p-relative flex items-center justify-between px-[32px] max-w-[1070px] mx-auto h-full">
          <div className="flex items-center gap-[24px] mw-[340px] w-full">
            <div className="flex items-center w-full">
              <div className="p-relative gap-[8px]">
                <input
                  className="h-[40px] w-full px-[16px] outline-none bg-[#f1f6f4] text-[#042330] border-solid border-gray-400 rounded-[8px]"
                  type="text"
                  placeholder="Search for books"
                />
                <div className="flex items-center p-absolute h-full right-8 justify-end border-solid border-l-2 border-gray-400">
                  <SearchIcon className="w-[24px] h-[24px] text-[#03314b]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
