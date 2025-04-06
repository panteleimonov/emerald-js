'use strict'

const $em = Object.create(null)

$em._version = '1.0.0'

$em._isLoaded = function () {
	console.log(`-> Emerald JS has been loaded. Version - ${$em._version}`)
}

$em._isLoaded()
