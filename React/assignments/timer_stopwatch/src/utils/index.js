export const formatTime = (timeMs) => {
  const milliseconds = Math.floor((timeMs % 1000) / 10);
  const secs = Math.floor((timeMs / 1000) % 60);
  const mins = Math.floor((timeMs / (1000 * 60)) % 60);
  const hr = Math.floor(timeMs / (1000 * 60 * 60));

  return `${getValue(hr)}: ${getValue(mins)}: ${getValue(secs)}: ${getValue(
    milliseconds
  )}`;
};
export const formatTimeFromSec = (timeInSec) => {
  const secs = Math.floor(timeInSec % 60);
  const mins = Math.floor(timeInSec / 60) % 60;
  const hr = Math.floor(timeInSec / 3600);

  return `${getValue(hr)}: ${getValue(mins)}: ${getValue(secs)}`;
};

export const getValue = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
};
