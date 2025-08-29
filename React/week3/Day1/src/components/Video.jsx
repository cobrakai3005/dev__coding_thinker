import React, { useRef } from "react";

export default function Video() {
  const ref = useRef(null);

  const handlePlay = () => {
    ref.current.play();
  };
  const handlePause = () => {
    ref.current.pause();
  };
  return (
    <>
      <video
        ref={ref}
        controls
        className="rounded-3xl"
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        width="620"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
        and watch it with your favorite video player!
      </video>

      <div className="flex gap-4 justify-center items-center">
        <button
          className="px-4 py-3 font-bold cursor-pointer bg-cyan-200 text-blue-400 rounded-md "
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="px-4 py-3 font-bold cursor-pointer bg-cyan-200 text-blue-400 rounded-md "
          onClick={handlePause}
        >
          Stop
        </button>
      </div>
    </>
  );
}
