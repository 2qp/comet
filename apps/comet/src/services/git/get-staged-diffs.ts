import { showMessage } from "../../utils/vs/show-message";
import { getGitRepository } from "./repositories/get-git-repository";

import type { Uri } from "vscode";
import type { GetGitApiType } from "./get-git-api";

type GetStagedDiffsParams = {
	/**
	 * uri of the repository
	 */
	uri: Uri;

	getGitApi: GetGitApiType;
};

type GetStagedDiffsType = (
	params: GetStagedDiffsParams,
) => Promise<string | undefined>;

const getStagedDiffs: GetStagedDiffsType = async ({ uri, getGitApi }) => {
	//

	const repo = getGitRepository({ getGitApi, uri });

	if (!repo) {
		showMessage("error", "No Git repository found");
		return;
	}

	const diff = await repo.diff(true);

	return diff;
};

export { getStagedDiffs };
export type { GetStagedDiffsParams, GetStagedDiffsType };
