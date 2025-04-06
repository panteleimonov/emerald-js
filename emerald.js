'use strict'

const $em = Object.create(null)

$em._version = '1.0.1'

$em._isLoaded = function () {
	console.log(`-> Emerald JS has been loaded. Version - ${$em._version}`)
}

$em.getStyle = function (element, styleName) {
	if (!element || !styleName) {
		console.error('Please pass a valid element and style name.')
		return null
	}

	if (window.getComputedStyle) {
		return window.getComputedStyle(element)[styleName] || null
	}

	// For older browsers (if you need to support IE8 and below)
	return element.currentStyle ? element.currentStyle[styleName] : null
}

$em._isLoaded()
