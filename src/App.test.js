import React from 'react';
import {
  render,
  screen,
  fireEvent,
  toBeDisabled,
  toBeEnabled,
  waitFor,
  waitForElement,
  queryByTestId,
} from '@testing-library/react';
import App from './App';
import PlayerControl from './components/PlayerControl';

describe('Player App', () => {
  test('render Player', () => {
    render(<App />);

    const linkElement = screen.getByTestId('player');

    expect(linkElement).toBeInTheDocument();
  });

  test('initial Player state', async () => {
    render(<App />);

    const playBtn = screen.getByTestId('play-button');
    const pauseBtn = screen.queryByTestId('pause-button');
    const stopBtn = screen.getByTestId('stop-button');

    expect(playBtn).toBeEnabled();
    expect(stopBtn).toBeDisabled();
    expect(pauseBtn).not.toBeInTheDocument();
  });

  test('Player show correct button on idle mode', async () => {
    render(
      <PlayerControl
        isPlaying={false}
        volume={50}
        onPauseClick={() => {}}
        onStopClick={() => {}}
        onPlayClick={() => {}}
        increaseVolume={() => {}}
      />
    );

    const playBtn = screen.getByTestId('play-button');
    const stopBtn = screen.getByTestId('stop-button');
    const pauseBtn = screen.queryByTestId('pause-button');

    expect(playBtn).toBeInTheDocument();
    expect(stopBtn).toBeInTheDocument();
    expect(stopBtn).toBeDisabled();
    expect(pauseBtn).toBe(null);
  });

  test('Player show correct button on play mode', async () => {
    render(
      <PlayerControl
        isPlaying={true}
        volume={50}
        onPauseClick={() => {}}
        onStopClick={() => {}}
        onPlayClick={() => {}}
        increaseVolume={() => {}}
      />
    );

    const playBtn = screen.queryByTestId('play-button');
    const stopBtn = screen.getByTestId('stop-button');
    const pauseBtn = screen.getByTestId('pause-button');

    expect(playBtn).not.toBeInTheDocument();
    expect(pauseBtn).toBeInTheDocument();
    expect(stopBtn).toBeInTheDocument();
    expect(stopBtn).toBeEnabled();
  });
});
