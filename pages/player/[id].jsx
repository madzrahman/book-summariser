import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import AudioPlayer from "@/components/audio/AudioPlayer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Player() {
  const router = useRouter();
  const { id } = router.query;
  const [playerData, setPlayerData] = useState({});

  const useDifferentClass = true;

  async function fetchPlayerData() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    setPlayerData(data || {});
  }

  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <>
      <div className="relative flex flex-col ml-[200px] foryou__height wrapper">
        <SearchBar />
        <Sidebar
          className={useDifferentClass ? "sidebar2__height" : "sidebar__height"}
        />
        <div className="relative w-full overflow-y-auto player__height summary">
          <div className="whitespace-pre-line	p-[24px] max-w-[800px] mx-auto">
            <div className="text-[#032b41] text-[24px] border-b-[1px] border-solid border-[#e1e7ea] pb-[16px] mb-[32px] leading-6 font-[900] summary__booktitle">
              {playerData.title}
            </div>
            <div className="whitespace-pre-line leading-[1.5] text-[#032b41] summary__booksummary">
              {playerData.summary}
            </div>
          </div>
          {/* AUDIO PLAYER HERE */}
          <AudioPlayer playerData={playerData} />
        </div>
      </div>
    </>
  );
}
