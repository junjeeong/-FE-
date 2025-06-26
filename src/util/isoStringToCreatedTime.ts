const isoStringToCreatedTime = (isoString: string): string => {
  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? "오전" : "오후";
  const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinute = minutes.toString().padStart(2, "0");

  return `${period} ${formattedHour}시 ${formattedMinute}분`;
};

export default isoStringToCreatedTime;
