import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Controls({
  audioRef,
  progressBarRef,
  setTimeElapsed,
  duration,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();

  const toggleStart = () => {
    setIsPlaying((prev) => !prev);
  };

  const skipForward10 = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward10 = () => {
    audioRef.current.currentTime -= 10;
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
    setTimeElapsed(currentTime);
    if (progressBarRef.current) {
      progressBarRef.current.value = currentTime || 0;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(progressBarRef.current.value / duration) * 100}%`
      );
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeElapsed]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <>
      <div className="controls-wrapper">
        <div className="controls flex gap-5 mx-10">
          <button onClick={skipBackward10}>
            <FontAwesomeIcon icon={faBackward} size={28} />
          </button>
          <button onClick={toggleStart}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} size={40} />
            ) : (
              <FontAwesomeIcon icon={faPlay} size={40} />
            )}
          </button>
          <button onClick={skipForward10}>
            <FontAwesomeIcon icon={faForward} size={28} />
          </button>
        </div>
      </div>
    </>
  );
}
