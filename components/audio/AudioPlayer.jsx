import { useRef, useState } from "react";
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer({ playerData }) {
  const progressBarRef = useRef();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const mediaData = {
    title: playerData?.title,
    src: playerData?.audioLink,
    author: playerData?.author,
    image: playerData?.imageLink,
  };

  return (
    <>
      <div className="w-full h-[80px] mt-auto flex items-center justify-between bg-[#042330] px-[40px] fixed bottom-0 left-0 z-9998">
        <DisplayTrack
          mediaData={playerData}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
        />
        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          setTimeElapsed={setTimeElapsed}
          duration={duration}
        />
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeElapsed={timeElapsed}
          duration={duration}
        />
      </div>
    </>
  );
}
