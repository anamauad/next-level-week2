export default function convertHoursToMinutes(time: string) {
  const [hour, minutes] = time
    .replace(/'/g, "")
    .replace(/"/g, "")
    .split(":")
    .map(Number);
  return hour * 60 + minutes;
}
