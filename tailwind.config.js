module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-2xl": { max: "1365px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-xs": { max: "559px" },
        "max-sm": { max: "639px" },
        "max-2xs": { max: "449px" },
        "2xs": { min: "450px" },
        xs: { min: "560px" },
        "2xl": { min: "1366px" },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
