"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current date as a formatted string, updated on the client.
 * The server renders the placeholder so SSR is stable; once the component
 * mounts in the browser the real (locale-correct, current-day) date appears.
 *
 * Every page load re-runs the effect, so the masthead naturally shows today's
 * date on every visit.
 */
export function useTodayString(
  options: Intl.DateTimeFormatOptions = {},
  locale: string = "en-GB",
  placeholder: string = "TODAY"
): string {
  const [value, setValue] = useState(placeholder);
  useEffect(() => {
    setValue(new Date().toLocaleDateString(locale, options).toUpperCase());
  }, [locale, options.weekday, options.year, options.month, options.day]);
  return value;
}
