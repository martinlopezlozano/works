module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};