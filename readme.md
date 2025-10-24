# date-fns Marathi Locale

[![npm version](https://badge.fury.io/js/date-fns-locale-marathi.svg)](https://www.npmjs.com/package/date-fns-mr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Complete Marathi (मराठी) locale for [date-fns](https://date-fns.org/) with native Devanagari script support, including Marathi digits (०-९).

## Features

✅ Full Marathi translations for months, days, and time periods  
✅ Native Marathi (Devanagari) digit conversion (०-९)  
✅ Support for short and abbreviated formats  
✅ Distance and relative time formatting  
✅ Proper ordinal number handling  
✅ TypeScript support with full type safety  
✅ Zero dependencies (except date-fns peer dependency)

## Installation

```bash
npm install date-fns date-fns-mr
```

or with yarn:

```bash
yarn add date-fns date-fns-mr
```

or with pnpm:

```bash
pnpm add date-fns date-fns-mr
```

## Usage

### Basic Date Formatting

```typescript
import { format } from "date-fns";
import { marathiLocale } from "date-fns-mr";

const date = new Date(2025, 9, 24); // October 24, 2025

// Full date with month name
format(date, "d MMMM yyyy", { locale: marathiLocale });
// Output: "२४ ऑक्टोबर २०२५"

// Short date
format(date, "d MMM yyyy", { locale: marathiLocale });
// Output: "२४ ऑक्टो २०२५"

// Full date with day name
format(date, "EEEE, d MMMM yyyy", { locale: marathiLocale });
// Output: "शुक्रवार, २४ ऑक्टोबर २०२५"

// Short day name
format(date, "EEE, d MMM", { locale: marathiLocale });
// Output: "शुक्र, २४ ऑक्टो"
```

### Time Formatting

```typescript
import { format } from "date-fns";
import { marathiLocale } from "date-fns-mr";

const date = new Date(2025, 9, 24, 14, 30);

// 24-hour format
format(date, "HH:mm", { locale: marathiLocale });
// Output: "१४:३०"

// With day period
format(date, "h:mm a", { locale: marathiLocale });
// Output: "२:३० संध्याकाळी"

// Full date and time
format(date, "d MMMM yyyy 'रोजी' HH:mm", { locale: marathiLocale });
// Output: "२४ ऑक्टोबर २०२५ रोजी १४:३०"
```

### Distance Formatting

```typescript
import { formatDistance, formatDistanceToNow } from "date-fns";
import { marathiLocale } from "date-fns-mr";

const pastDate = new Date(2025, 9, 20);
const futureDate = new Date(2025, 9, 28);

// Distance from past
formatDistance(pastDate, new Date(2025, 9, 24), {
  locale: marathiLocale,
  addSuffix: true,
});
// Output: "४ दिवस पूर्वी"

// Distance to future
formatDistance(futureDate, new Date(2025, 9, 24), {
  locale: marathiLocale,
  addSuffix: true,
});
// Output: "४ दिवस मध्ये"

// Distance to now
formatDistanceToNow(pastDate, {
  locale: marathiLocale,
  addSuffix: true,
});
// Output: "४ दिवस पूर्वी"
```

### Relative Time Formatting

```typescript
import { formatRelative } from "date-fns";
import { marathiLocale } from "date-fns-mr";

const baseDate = new Date(2025, 9, 24);

// Yesterday
formatRelative(new Date(2025, 9, 23), baseDate, { locale: marathiLocale });
// Output: "काल"

// Today
formatRelative(new Date(2025, 9, 24), baseDate, { locale: marathiLocale });
// Output: "आज"

// Tomorrow
formatRelative(new Date(2025, 9, 25), baseDate, { locale: marathiLocale });
// Output: "उद्या"
```

### Parsing Dates

```typescript
import { parse } from "date-fns";
import { marathiLocale } from "date-fns-mr";

// Parse Marathi date string
const date = parse("२४ ऑक्टोबर २०२५", "d MMMM yyyy", new Date(), {
  locale: marathiLocale,
});

console.log(date); // Date object: October 24, 2025
```

## TypeScript Support

This package is written in TypeScript and provides full type definitions:

```typescript
import { Locale } from "date-fns";
import { marathiLocale } from "date-fns-mr";

// marathiLocale is properly typed as Locale
const locale: Locale = marathiLocale;
```

## Locale Options

The Marathi locale includes the following configurations:

- **Week starts on**: Monday (1)
- **First week contains date**: 1
- **Digits**: Native Marathi digits (०-९)

## Format Tokens

### Common Format Tokens

| Token  | Description             | Example Output |
| ------ | ----------------------- | -------------- |
| `d`    | Day of month            | २४             |
| `dd`   | Day of month (2 digits) | २४             |
| `E`    | Day of week (short)     | शुक्र          |
| `EEEE` | Day of week (full)      | शुक्रवार       |
| `M`    | Month                   | १०             |
| `MM`   | Month (2 digits)        | १०             |
| `MMM`  | Month (short)           | ऑक्टो          |
| `MMMM` | Month (full)            | ऑक्टोबर        |
| `yyyy` | Year                    | २०२५           |
| `HH`   | Hour (24h)              | १४             |
| `mm`   | Minute                  | ३०             |
| `ss`   | Second                  | ४५             |
| `a`    | Day period              | संध्याकाळी     |

## Translations Reference

### Months (महिने)

**Full**: जानेवारी, फेब्रुवारी, मार्च, एप्रिल, मे, जून, जुलै, ऑगस्ट, सप्टेंबर, ऑक्टोबर, नोव्हेंबर, डिसेंबर

**Short**: जाने, फेब्रु, मार्च, एप्रि, मे, जून, जुलै, ऑग, सप्टे, ऑक्टो, नोव्हें, डिसें

### Days (दिवस)

**Full**: रविवार, सोमवार, मंगळवार, बुधवार, गुरुवार, शुक्रवार, शनिवार

**Short**: रवि, सोम, मंगळ, बुध, गुरु, शुक्र, शनि

**Narrow**: र, सो, मं, बु, गु, शु, श

### Day Periods

- **AM**: सकाळी (sakāḷī)
- **PM**: संध्याकाळी (sandhyākāḷī)
- **Midnight**: मध्यरात्र (madhyarātra)
- **Noon**: दुपार (dupāra)

## Browser Support

This package supports all modern browsers and Node.js environments that are supported by date-fns.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Reporting Issues

Please report any bugs or translation inaccuracies by opening an issue on GitHub.

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

```

## License

MIT © Mahesh Rathod

## Acknowledgments

- Built for [date-fns](https://date-fns.org/)
- Inspired by other date-fns locale packages
- Translations follow standard Marathi language conventions

## Related Packages

- [date-fns](https://www.npmjs.com/package/date-fns) - Modern JavaScript date utility library

## Support

If you find this package helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting improvements
- 📖 Improving documentation

## Keywords

date-fns, marathi, locale, localization, i18n, internationalization, devanagari, marathi-language, date-formatting, time-formatting, typescript, javascript, date-utility, marathi-digits, indian-languages, regional-language, date-parser, date-manipulation, npm-package, frontend, backend, node, browser

---

Made with ❤️ for the Marathi-speaking community
