import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetRelatedSongsQuery,
  useGetSongDetailsQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery(songid);
  const { data: relatedSongsData, isFetching: isFetchingRelatedSongs } =
    useGetRelatedSongsQuery(songid);

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Loading song details..." />;
  if (error) return <Error />;

  const handlePlayClick = (song, data, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex flex-col ml-10">
      <DetailsHeader artistId={artistId} songData={songData} />

      <div className="mb-10">
        <h2 className="font-bold text-3xl text-white">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1]?.type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, index) => (
              <p
                key={`lyrics-${line}-${index}`}
                className="text-gray-300 text-base my-3"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-300 text-base my-1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={relatedSongsData}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetails;
