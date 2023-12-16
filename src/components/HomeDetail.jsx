import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeDetail() {
  const params = useParams();
  const [videos, setVideos] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const [channel, setChannel] = useState(null);
  const goPage = useNavigate();

  const relatedVideosUrl =
    "https://youtube-v3-alternative.p.rapidapi.com/trending";
  const videoDetailsUrl = `https://youtube-v31.p.rapidapi.com/videos?id=${params.videoId}&part=contentDetails%2Csnippet%2Cstatistics`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "600ca960e0mshdfe24a65e26083fp1d3d24jsncd85c0a116f5",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const options2 = {
    ...options,
    headers: {
      ...options.headers,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const options3 = {
    ...options,
    headers: {
      ...options.headers,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  async function GET(url, options) {
    let respons = await fetch(url, options);
    let data = await respons.json();
    return data;
  }

  async function getData(url, options) {
    let respons = await fetch(url, options);
    let deta = await respons.json();
    setVideos(deta.data);
  }

  async function GetAllData() {
    let details = await GET(videoDetailsUrl, options2).then((res) => {
      setVideoInfo(res);
      return res;
    });
    console.log(details);

    await GET(
      `https://youtube-v3-alternative.p.rapidapi.com/channels?id=${details.items[0].snippet.channelId}`,
      options3
    ).then((res) => {
      setChannel(res);
    });
  }

  useEffect(() => {
    getData(relatedVideosUrl, options);
    GetAllData();
    console.log("RENDERED");
  }, [params]);
  console.log(videoInfo, "HHHHHHHHHHHHHHHHHHHHHHH");
  return (
    <>
      <div className="homeDetail">
        <div className="homeDetailVideo">
          <iframe
            className="detailVideo"
            src={`https://www.youtube.com/embed/${params.videoId}`}
            frameborder="0"
          ></iframe>
          <p>{videoInfo?.items[0]?.snippet.title}</p>
          <div className="statistics">
            <p>{videoInfo?.items[0]?.statistics.viewCount}</p>
            <div>
              <span>
                <img src="" alt="like" />
                {videoInfo?.items[0]?.statistics.likeCount}
              </span>
              <span>
                <img src="" alt="dislike" />
                {videoInfo?.items[0]?.statistics.favoriteCount}
              </span>
              <span>
                <img src="" alt="share" />
              </span>
            </div>
          </div>
          <div className="channels">
            <div>
              <div>
                {channel && (
                  <img
                    src={channel?.items[0]?.snippet.thumbnails.default.url}
                    alt=""
                  />
                )}
                <span>
                  <p></p>
                  <p></p>
                </span>
              </div>
            </div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="homeDetailCards">
          {videos?.map((url) => (
            <div
              className="video"
              onClick={() => {
                goPage(`/home/${url.videoId}`);
              }}
            >
              <div className="videoTime">
                <img src={`${url.thumbnail[0].url}`} alt="" />
                <span>{url.lengthText}</span>
              </div>
              <p>{url.title}</p>
              <div className="detailTitles">
                <span>{url.publishedText}</span>
                <span>{url.channelTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
