import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BookInfo() {
  const router = useRouter();
  const { id } = router.query;
  const [bookData, setBookData] = useState({});

  async function fetchBookData() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    setBookData(data || {});
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <>
      <div className="relative flex flex-col ml-[200px] foryou__height wrapper">
        <SearchBar />
        <Sidebar />
        <div className="row">
          <div className="container">
            {bookData.length > 0 &&
              bookData.map((book, index) => (
                <div key={index}>
                  <h1>{book.title}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
