// @ts-check

/**
 * Adds an extra step in release.yml GitHub workflow to patch an issue with npm 9 and Pike
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.scriptPath Path to the script file you want to integrate in your release workflow
 */
export async function script(octokit, repository, { scriptPath }) {}
