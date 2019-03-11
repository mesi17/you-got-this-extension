const vscode = require('vscode');
const axios = require('axios')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "you-got-this" is now active!');

	let disposable = vscode.commands.registerCommand('extension.youGotThis', async function () {
	
		const { data } = await axios.get('https://you-got-this-server.herokuapp.com/api/quotes')
		vscode.window.showInformationMessage(`"${data.quote}" -${data.author} ${data.source}`)
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
