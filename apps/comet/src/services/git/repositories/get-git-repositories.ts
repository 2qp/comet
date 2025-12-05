import type { Repository } from "../../../types/git";
import type { GetGitApiType } from "../get-git-api";

type GetGitRepositoriesParams = {
	getGitApi: GetGitApiType;
};

type GetGitRepositoriesType = (
	params: GetGitRepositoriesParams,
) => Repository[];

const getGitRepositories: GetGitRepositoriesType = ({ getGitApi }) => {
	//

	const api = getGitApi();
	return api ? api.repositories : [];
};

export { getGitRepositories };
export type { GetGitRepositoriesParams, GetGitRepositoriesType };
