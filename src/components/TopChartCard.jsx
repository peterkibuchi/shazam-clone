import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const TopChartCard = ({
  song,
  index,
  activeSong,
  isPlaying,
  handlePlayClick,
  handlePauseClick,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] mb-2 py-2 p-4 rounded-lg cursor-pointer">
    <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        src={song?.images?.coverart}
        alt={song?.title}
        className="w-20 h-20 rounded-lg"
      />

      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song?.key}`}>
          <p className="font-bold text-xl text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0]?.adamid}`}>
          <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>
    </div>

    <PlayPause
      song={song}
      activeSong={activeSong}
      isPlaying={isPlaying}
      handlePlay={handlePlayClick}
      handlePause={handlePauseClick}
    />
  </div>
);

export default TopChartCard;
