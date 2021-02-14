import { useState, useEffect } from 'react';
import Feed from 'feed-media-audio-player';

const usePlayer = ({
  onPlayStarted,
  onPlayPaused,
  onPlayCompleted,
  onPlayStopped,
  onPlayResumed,
}) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const player = new Feed.Player('demo', 'demo');
    player.setVolume(50);

    // Display all the events the player triggers
    player.on('all', function (event) {
      console.log(
        "player triggered event '" + event + "' with arguments:",
        Array.prototype.splice.call(arguments, 1)
      );
    });

    player.on('play-started', onPlayStarted);
    player.on('play-paused', onPlayPaused);
    player.on('play-completed', onPlayCompleted);
    player.on('play-stopped', onPlayStopped);
    player.on('play-resumed', onPlayResumed);
    player.tune();

    new Feed.PlayerView('player-view-div', player);

    setPlayer(player);

    return () => {
      player.off('play-started');
      player.off('play-paused');
      player.off('play-stopped');
      player.off('play-completed');
      player.off('play-resumed');
    };
  }, [
    onPlayStarted,
    onPlayPaused,
    onPlayStopped,
    onPlayCompleted,
    onPlayResumed,
  ]);

  return {
    stop: () => player.stop(),
    pause: () => player.pause(),
    play: () => player.play(),
    increaseVolume: (newValue) => player.setVolume(newValue),
    getVol: () => player.getVolume(),
  };
};
export default usePlayer;
