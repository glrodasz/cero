const { choices, decisions } = require('../tokens')
const fs = require("fs");

// function getValue (object) {
// 	if (typeof object === 'Object') {
// 		getValue(object)
// 	}

// 	return 
// }

function buildCustomProperties() {
	const choicesKeys = Object.keys(choices)

	// const choicesCustomProperties = choicesKeys.reduce((prev, curr) => {
	// 	choices[curr]
	// }, '')

	let choicesStr = ''

	if (typeof choices['colors'] === 'object') {
		const colorsKeys = Object.keys(choices['colors'])

		choicesStr = colorsKeys.reduce((prev, curr) => {

			if (typeof choices['colors'][curr] === 'object') {
				const brandKeys = Object.keys(choices['colors'][curr])

				const colorsStr = brandKeys.reduce((prevBrandKeys, currBrandKeys) => {

					const value = choices['colors'][curr][currBrandKeys]

					return `
					${prevBrandKeys}
					--colors-${curr}-${currBrandKeys}: ${value};
					`;
				}, '')

				return `
					${prev}
					${colorsStr}
				`
			} else {
				return `
					${prev}
					--colors-${curr}: ${choices['colors'][curr]};
				`
			}
		}, '')

	}

	const customProperties = choicesStr
	
	const data = `
	:root {
		${customProperties}	
	}
	`
	
	fs.writeFile("./tokens.css", data, 'utf8', function (error) {
	  if (error) {
		return console.error(error);
	  }
	});
}

buildCustomProperties()
