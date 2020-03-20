# VS Code Watcher Ext

### Description

The following extension verifies the `watcher` API by listening to the following events:
- `onDidCreate`
- `onDidDelete`
- `onDidUpdate`

For a file that satisfies the given `glob` pattern `**/*-watcher.ts` (ex: `test-watcher.ts)
For each event, an information message is displayed in the client.