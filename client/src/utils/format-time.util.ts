/**
 * @function formatTime
 * @description Converts an ISO 8601 date string into a localized time string.
 *
 * @param {string} iso - An ISO-formatted date string (e.g., "2025-08-05T12:34:56.000Z").
 * @returns {string} The local time string representation (e.g., "8:34:56 AM").
 *
 * @example
 * formatTime("2025-08-05T12:34:56.000Z"); // "8:34:56 AM" (depending on locale)
 */
export const formatTime = (iso: string): string => {
  const date = new Date(iso);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
