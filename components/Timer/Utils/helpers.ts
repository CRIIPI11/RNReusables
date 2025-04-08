export const formattedTime = (time: number) => {
  const formatted = String(time).padStart(2, "0");
  return formatted;
};

export const fullFormattedTime = (time: number) => {
  const countInSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(countInSeconds / 60);
  const seconds = countInSeconds % 60;
  const formattedMinutes = formattedTime(minutes);
  const formattedSeconds = formattedTime(seconds);
  return `${formattedMinutes}:${formattedSeconds}`;
};
