import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  artistId,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col mt-5">
    <h2 className="font-bold text-3xl text-white">Related Songs:</h2>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar
          key={`${song.key}-${artistId}-${index}`}
          song={song}
          data={data}
          index={index}
          artistId={artistId}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
