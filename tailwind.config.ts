import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        foreground: "#0a0801",
        background: "#f8f4e4",
        primary: "#ffa400",
        secondary: "#006ba6",
      },
    },
  },
}

export default config
