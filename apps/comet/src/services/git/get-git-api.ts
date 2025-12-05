import { showMessage } from "../../utils/vs/show-message";
import { extensions } from "vscode";

import type { API, GitExtension } from "../../types/git";

// type GetGitApiParams = {};

type GetGitApiType = () => API | undefined;

const getGitApi: GetGitApiType = () => {
	//

	const gitExtension = extensions.getExtension<GitExtension>("vscode.git");
	if (!gitExtension) {
		showMessage("error", "Git extension not found");
		return;
	}

	const git = gitExtension.exports.getAPI(1);

	return git;
};

export { getGitApi };
export type { GetGitApiType };
