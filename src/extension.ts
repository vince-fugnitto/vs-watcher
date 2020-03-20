import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const watcher = vscode.workspace.createFileSystemWatcher('**/*-watcher.ts', false, false, false);
	// Listen to the `onDidChangeEvent`.
	watcher.onDidChange(e => {
		vscode.window.showInformationMessage(`file updated: ${e.path}`);
	});
	// Listen to the `onDidCreate`.
	watcher.onDidCreate(e => {
		vscode.window.showInformationMessage(`file created: ${e.path}`);
	});
	// Listen to the `onDidDelete`.
	watcher.onDidDelete(e => {
		vscode.window.showInformationMessage(`file deleted: ${e.path}`);
	});
}

export function deactivate() { }
