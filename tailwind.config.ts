/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		fontFamily: {
			"caslon": ["caslon"],
			"kandinsky": ["Tangerine", "cursive"]
		},
    extend: {
			animation: {
				typing: "typing 2.5s steps(25) 2s 1 normal both, blink 1s steps(1) infinite"
			},
			spacing: {
				"screen90": "90vh",
				lessrbar: "calc(100vw - 307px)"
			},
			keyframes: {
				typing: {
					"from": {width: "0"},
					"to": {width: "100%", paddingRight: "5px"}
				},
				blink: {
					"50%": {borderColor: "transparent"}
				}
			}
		},
  },
  plugins: [],
}

