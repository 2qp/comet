import type { Uri } from "vscode";
import type { Repository } from "../../../types/git";
import type { GetGitApiType } from "../get-git-api";

type GetGitRepositoryParams = {
	uri: Uri;
	getGitApi: GetGitApiType;
};

type GetGitRepositoryType = (
	params: GetGitRepositoryParams,
) => Repository | null | undefined;

const getGitRepository: GetGitRepositoryType = ({ uri, getGitApi }) => {
	//

	const api = getGitApi();
	return api?.getRepository(uri);
};

export { getGitRepository };
export type { GetGitRepositoryParams, GetGitRepositoryType };
