/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#f8f5ef",
        blue: {
          DEFAULT: "#459ddb",
          dark: "#083e66",
          pale: "#bde2f7",
        },
        coral: {
          DEFAULT: "#ef665b",
          dark: "#641d19",
          pale: "#ffc3a4",
        },
        sun: "#ffb20f",
      },
      fontFamily: {
        display: ['"Chelsea Market"', "Georgia", "serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        mono: ['"DM Mono"', "Menlo", "monospace"],
      },
      boxShadow: {
        block: "8px 8px 0 #171717",
        "block-small": "4px 4px 0 #171717",
      },
    },
  },
  plugins: [],
};
