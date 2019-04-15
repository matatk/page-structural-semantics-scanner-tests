'use strict'
const fs = require('fs')
const path = require('path')

const out = []

function pathToScript(scriptName) {
	return path.join('examples', scriptName + '.js')
}

console.log('Inserting example scripts into README...')

for (const line of fs.readFileSync('README.template.md', 'utf-8').split('\n')) {
	const match = line.match(/^INCLUDE-(\S+)$/)
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

fs.writeFileSync('README.md', out.join('\n'))
