import { useNavigate } from "react-router-dom";

function VideoCard({ item, customImage, lengthText, id }) {
  const goPage = useNavigate();
  if (item.type == "channel") {
    return null;
  }
  return (
    <div
      className="video"
      onClick={() => {
        goPage(`/home/${id}`);
      }}
    >
      <img
        src={`${customImage ? customImage : item.thumbnail[0].url}`}
        alt=""
      />
      <span className="videoTime">{lengthText}</span>
    </div>
  );
}

export default VideoCard;
