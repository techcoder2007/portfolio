import React, { useRef, useEffect, HtmlHTMLAttributes } from "react";

export function Playme() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  }, []);

  return <audio ref={audioRef} src="/audios/play-me.mp3" loop />;
}
