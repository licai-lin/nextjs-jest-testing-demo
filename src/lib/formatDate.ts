const NOTE_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: "UTC",
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

export function formatNoteDate(timestamp: number) {
  return new Date(timestamp).toLocaleString("en-SG", NOTE_DATE_FORMAT_OPTIONS);
}
