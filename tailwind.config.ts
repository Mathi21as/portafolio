/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		fontFamily: {
		},
    extend: {
			animation: {
				typing: "typing 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite",
				typing_mobile: "typing_mobile 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite"
			},
			spacing: {
				"screen90": "90vh"
			},
			keyframes: {
				typing: {
					"from": {width: "0"},
					"to": {width: "510px", paddingRight: "1px"}
				},
				typing_mobile: {
					"from": {width: "0"},
					"to": {width: "388px", paddingRight: "1px"}
				},
				blink: {
					"50%": {borderColor: "transparent"}
				}
			}
		},
  },
  plugins: [],
}

