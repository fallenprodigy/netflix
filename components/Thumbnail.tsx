import Image from "next/legacy/image";
import { useRecoilState } from "recoil";
import { Movie } from "../typings";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  movie: Movie;
  //   when using firebase
  //   movie: Movie | DocumentData;
}

const Thumbnail = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div
      className="relative h-20 min-w-[100px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        alt={movie.name}
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
