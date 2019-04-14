'use strict'
const fs = require('fs')
const path = require('path')

const readme = 'README.md'
const template = 'README.template.md'
const out = []

function pathToScript(scriptName) {
	return path.join('examples', scriptName + '.js')
}

for (const line of fs.readFileSync(template, 'utf-8').split('\n')) {
	const match = line.match(/INCLUDE-(\w+)/)
	if (match) {
		const scriptName = match[1].toLowerCase()
		const scriptPath = pathToScript(scriptName)
		const script = fs.readFileSync(scriptPath, 'utf-8')
		out.push('```javascript')
		out.push('// This file is ' + scriptPath)
		out.push(...script.slice(0, -1).split('\n'))
		out.push('```')
	} else {
		out.push(line)
	}
}

fs.writeFileSync(readme, out.join('\n'))
