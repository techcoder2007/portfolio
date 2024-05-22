"use client";
import { IconMusicPause, IconPlayerPlay } from "@tabler/icons-react";
import React, { useRef, useEffect, useState } from "react";

export function Playme() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then((value) => {
        return value;
      });
    }
  }, []);

  return (
    <>
      <div
        onClick={() => {
          console.log("click");
          setIsPlay(true);
        }}
      >
        <button className="fixed cursor-pointer bottom-[100px] right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
          {isPlay ? <IconMusicPause /> : <IconPlayerPlay onClick={() => setIsPlay(true)} />}
        </button>
      </div>
      <audio src="/audios/play-me.mp3" ref={audioRef} autoPlay />
    </>
  );
}
