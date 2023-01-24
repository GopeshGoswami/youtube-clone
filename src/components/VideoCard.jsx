import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// import {
//   demoThumbnailUrl,
//   demoVideoUrl,
//   demoVideoTitle,
//   demoChannelUrl,
//   demoChannelTitle,
// } from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: "358px", md: "279.484px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "1rem",
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { xs: "90vw", sm: "358px", md: "279.484px" },
            height: 157.203,
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "black", height: "106px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" color="#fff" fontWeight="bold">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
