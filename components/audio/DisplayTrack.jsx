import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisplayTrack({
  audioRef,
  progressBarRef,
  setDuration,
  playerData,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <>
      <div>
        <audio
          src={playerData?.audioLink}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
        <div className="audio-info flex items-center my-2">
          <div className="audio-image">
            {playerData?.imageLink ? (
              <img
                src={playerData?.imageLink}
                className="w-[80px] min-w-[60px]"
                alt="audio avatar"
              />
            ) : (
              <div className="icon-wrapper">
                <span className="audio-icon">
                  <FontAwesomeIcon icon={faMusic} />
                </span>
              </div>
            )}
          </div>
          <div className="text">
            <p className="title text-sm">{playerData?.title}</p>
            <p>{playerData?.author}</p>
          </div>
        </div>
      </div>
    </>
  );
}
