import dayjs from "dayjs";

export function toFormatDate(dateString, format = "YYYY-MM-DD HH:mm:ss") {
  if (!dateString) return "-";
  return dayjs(dateString).format(format);
}

export const downloadImage = async (img, imageFileName) => {
  const response = await fetch(img);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = imageFileName || "image";
  a.click();
};
