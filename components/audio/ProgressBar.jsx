export default function ProgressBar({
  progressBarRef,
  audioRef,
  timeElapsed,
  duration,
}) {
  const handleTimeElapsed = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formattedMinutes}:${formattedSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      <div className="progress w-[80%] md:w-[30%] flex">
        <span className="time current">{formatTime(timeElapsed)}</span>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleTimeElapsed}
          className="w-[80%]"
        />{" "}
        <span className="time">{formatTime(duration)}</span>
      </div>
    </>
  );
}
