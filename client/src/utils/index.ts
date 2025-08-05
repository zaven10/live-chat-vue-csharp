/**
 * @file index.ts
 * @description Re-exports the `formatTime` utility under the alias `$formatTime`.
 * This provides a consistent, prefixed naming convention across the app for shared utilities.
 */

import { formatTime } from "./format-time.util";

/**
 * @constant $formatTime
 * @description Alias for the `formatTime` function, used for formatting ISO strings into local time strings.
 *
 * @see formatTime - Original function defined in `format-time.util.ts`
 */
export { formatTime as $formatTime };
