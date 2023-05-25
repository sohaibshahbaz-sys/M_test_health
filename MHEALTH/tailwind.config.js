/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#1e293b",
          "300": "#221a1a",
        },
        white: "#fff",
        silver: "#c2c2c2",
        lime: "#11ec14",
        lightskyblue: "#a4cbff",
        dimgray: "#707070",
        cornflowerblue: "#3c77c5",
        indianred: "#e8505b",
      },
      fontFamily: {
        poppins: "Poppins",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        "15xl": "34px",
        "6xs": "7px",
        mini: "15px",
        "8xl": "27px",
        lgi: "19px",
        "16xl": "35px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "7xl": "26px",
      "5xl": "24px",
      xs: "12px",
      xl: "20px",
      lg: "18px",
      base: "16px",
      "8xs": "5px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
