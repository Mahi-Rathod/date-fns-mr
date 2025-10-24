import type { Locale } from "date-fns";

// Marathi digits map
const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const toMarathiDigits = (num: number | string): string =>
  num.toString().replace(/[0-9]/g, (d) => marathiDigits[+d]);

// Months
const marathiMonths = [
  "जानेवारी",
  "फेब्रुवारी",
  "मार्च",
  "एप्रिल",
  "मे",
  "जून",
  "जुलै",
  "ऑगस्ट",
  "सप्टेंबर",
  "ऑक्टोबर",
  "नोव्हेंबर",
  "डिसेंबर",
];

const marathiMonthsShort = [
  "जाने",
  "फेब्रु",
  "मार्च",
  "एप्रि",
  "मे",
  "जून",
  "जुलै",
  "ऑग",
  "सप्टे",
  "ऑक्टो",
  "नोव्हें",
  "डिसें",
];

// Days
const marathiDays = [
  "रविवार",
  "सोमवार",
  "मंगळवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार",
];

const marathiDaysShort = ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"];

const marathiDaysNarrow = ["र", "सो", "मं", "बु", "गु", "शु", "श"];

// Era
const eraValues = {
  narrow: ["इ.स.पू", "इ.स."] as const,
  abbreviated: ["इ.स.पूर्व", "इ.स."] as const,
  wide: ["ईसवीसनपूर्व", "ईसवीसन"] as const,
};

// Quarter
const quarterValues = {
  narrow: ["१", "२", "३", "४"] as const,
  abbreviated: ["ति१", "ति२", "ति३", "ति४"] as const,
  wide: [
    "पहिली तिमाही",
    "दुसरी तिमाही",
    "तिसरी तिमाही",
    "चौथी तिमाही",
  ] as const,
};

// Day period
const dayPeriodValues = {
  narrow: {
    am: "स",
    pm: "सं",
    midnight: "मध्यरात्र",
    noon: "दुपार",
    morning: "सकाळ",
    afternoon: "दुपार",
    evening: "संध्याकाळ",
    night: "रात्र",
  },
  abbreviated: {
    am: "सकाळी",
    pm: "संध्याकाळी",
    midnight: "मध्यरात्र",
    noon: "दुपार",
    morning: "सकाळ",
    afternoon: "दुपार",
    evening: "संध्याकाळ",
    night: "रात्र",
  },
  wide: {
    am: "सकाळी",
    pm: "संध्याकाळी",
    midnight: "मध्यरात्र",
    noon: "दुपार",
    morning: "सकाळ",
    afternoon: "दुपार",
    evening: "संध्याकाळ",
    night: "रात्र",
  },
};

// Format distance tokens
const formatDistanceLocale: Record<string, string> = {
  lessThanXSeconds: "{{count}} सेकंदापेक्षा कमी",
  xSeconds: "{{count}} सेकंद",
  halfAMinute: "अर्धा मिनिट",
  lessThanXMinutes: "{{count}} मिनिटापेक्षा कमी",
  xMinutes: "{{count}} मिनिटे",
  aboutXHours: "सुमारे {{count}} तास",
  xHours: "{{count}} तास",
  xDays: "{{count}} दिवस",
  aboutXWeeks: "सुमारे {{count}} आठवडे",
  xWeeks: "{{count}} आठवडे",
  aboutXMonths: "सुमारे {{count}} महिने",
  xMonths: "{{count}} महिने",
  aboutXYears: "सुमारे {{count}} वर्षे",
  xYears: "{{count}} वर्षे",
  overXYears: "{{count}} वर्षांपेक्षा अधिक",
  almostXYears: "जवळजवळ {{count}} वर्षे",
};

// Format relative tokens
const formatRelativeLocale: Record<string, string> = {
  lastWeek: "'मागील' eeee",
  yesterday: "'काल'",
  today: "'आज'",
  tomorrow: "'उद्या'",
  nextWeek: "'पुढील' eeee",
  other: "P",
};

export const marathiLocale: Locale = {
  code: "mr",

  formatLong: {
    date: () => "d MMMM yyyy",
    time: () => "HH:mm",
    dateTime: () => "d MMMM yyyy, HH:mm",
  },

  localize: {
    ordinalNumber: (dirtyNumber) => {
      return toMarathiDigits(dirtyNumber);
    },

    era: (dirtyIndex, options) => {
      const index = dirtyIndex as 0 | 1;
      const width = options?.width ?? "wide";

      if (width === "narrow") return eraValues.narrow[index];
      if (width === "abbreviated") return eraValues.abbreviated[index];
      return eraValues.wide[index];
    },

    quarter: (dirtyQuarter, options) => {
      const quarter = (dirtyQuarter - 1) as 0 | 1 | 2 | 3;
      const width = options?.width ?? "wide";

      if (width === "narrow") return quarterValues.narrow[quarter];
      if (width === "abbreviated") return quarterValues.abbreviated[quarter];
      return quarterValues.wide[quarter];
    },

    month: (dirtyMonth, options) => {
      const width = options?.width ?? "wide";
      if (width === "narrow" || width === "short" || width === "abbreviated") {
        return marathiMonthsShort[dirtyMonth];
      }
      return marathiMonths[dirtyMonth];
    },

    day: (dirtyDay, options) => {
      const width = options?.width ?? "wide";
      if (width === "narrow") {
        return marathiDaysNarrow[dirtyDay];
      }
      if (width === "short" || width === "abbreviated") {
        return marathiDaysShort[dirtyDay];
      }
      return marathiDays[dirtyDay];
    },

    dayPeriod: (dirtyDayPeriod, options) => {
      const width = options?.width ?? "wide";
      const dayPeriod = dirtyDayPeriod.toLowerCase();

      const periods =
        width === "narrow"
          ? dayPeriodValues.narrow
          : width === "abbreviated"
          ? dayPeriodValues.abbreviated
          : dayPeriodValues.wide;

      return periods[dayPeriod as keyof typeof periods] || "";
    },
  },

  formatDistance: (token, count, options) => {
    const num = toMarathiDigits(count);
    const result = formatDistanceLocale[token]?.replace("{{count}}", num) || "";

    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return result + " मध्ये";
      } else {
        return result + " पूर्वी";
      }
    }

    return result;
  },

  formatRelative: (token) => {
    return formatRelativeLocale[token] || formatRelativeLocale.other;
  },

  match: {
    ordinalNumber: (dirtyString) => {
      // Convert Marathi digits back to numbers
      const cleaned = dirtyString.replace(/[०-९]/g, (d) =>
        marathiDigits.indexOf(d).toString()
      );
      const value = parseInt(cleaned, 10);

      if (isNaN(value)) {
        return null;
      }

      return {
        value,
        rest: "",
      };
    },

    era: (dirtyString) => {
      if (dirtyString.includes("पूर्व")) {
        return { value: 0, rest: "" };
      }
      if (dirtyString.includes("इ.स.")) {
        return { value: 1, rest: "" };
      }
      return null;
    },

    quarter: (dirtyString) => {
      const match = dirtyString.match(/[१२३४]/);
      if (match) {
        const digit = marathiDigits.indexOf(match[0]);
        if (digit >= 1 && digit <= 4) {
          return { value: digit as 1 | 2 | 3 | 4, rest: "" };
        }
      }

      // Try to match full quarter names
      for (let i = 0; i < quarterValues.wide.length; i++) {
        if (dirtyString.includes(quarterValues.wide[i])) {
          return { value: (i + 1) as 1 | 2 | 3 | 4, rest: "" };
        }
      }

      return null;
    },

    month: (dirtyString) => {
      const index = marathiMonths.findIndex((m) => dirtyString.includes(m));
      if (index !== -1) {
        return {
          value: index as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
          rest: "",
        };
      }
      const shortIndex = marathiMonthsShort.findIndex((m) =>
        dirtyString.includes(m)
      );
      if (shortIndex !== -1) {
        return {
          value: shortIndex as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
          rest: "",
        };
      }
      return null;
    },

    day: (dirtyString) => {
      const index = marathiDays.findIndex((d) => dirtyString.includes(d));
      if (index !== -1) {
        return { value: index as 0 | 1 | 2 | 3 | 4 | 5 | 6, rest: "" };
      }
      const shortIndex = marathiDaysShort.findIndex((d) =>
        dirtyString.includes(d)
      );
      if (shortIndex !== -1) {
        return { value: shortIndex as 0 | 1 | 2 | 3 | 4 | 5 | 6, rest: "" };
      }
      return null;
    },

    dayPeriod: (dirtyString) => {
      if (dirtyString.includes("सकाळ") || dirtyString.includes("स")) {
        return { value: "am" as const, rest: "" };
      }
      if (dirtyString.includes("संध्याकाळ") || dirtyString.includes("सं")) {
        return { value: "pm" as const, rest: "" };
      }
      if (dirtyString.includes("मध्यरात्र")) {
        return { value: "midnight" as const, rest: "" };
      }
      if (dirtyString.includes("दुपार")) {
        return { value: "noon" as const, rest: "" };
      }
      return null;
    },
  },

  options: {
    weekStartsOn: 1, // Monday
    firstWeekContainsDate: 1,
  },
};
