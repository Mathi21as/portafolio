/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		fontFamily: {
		},
    extend: {
			animation: {
				typing: "typing 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite",
				typing_en: "typing_en 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite",
				typing_mobile: "typing_mobile 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite",
				typing_mobile_en: "typing_mobile_en 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite",
			},
			spacing: {
				"screen90": "90vh",
				"1/4": "22%"
			},
			keyframes: {
				typing: {
					"from": {width: "0"},
					"to": {width: "20rem", paddingRight: "1px"}
				},
				typing_en: {
					"from": {width: "0"},
					"to": {width: "17.3rem", paddingRight: "1px"}
				},
				typing_mobile: {
					"from": {width: "0"},
					"to": {width: "16.2rem", paddingRight: "1px"}
				},
				typing_mobile_en: {
					"from": {width: "0"},
					"to": {width: "13.9rem", paddingRight: "1px"}
				},
				blink: {
					"50%": {borderColor: "transparent"}
				}
			}
		},
  },
  plugins: [],
}

