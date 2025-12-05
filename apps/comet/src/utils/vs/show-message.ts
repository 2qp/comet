import { window } from "vscode";

import type { MessageItem } from "vscode";

type ShowMessageParams = {};

type MessageType = "info" | "error" | "warning";

type InfoMessageParams = Parameters<typeof window.showInformationMessage>;
type ErrorMessageParams = Parameters<typeof window.showErrorMessage>;
type WarningMessageParams = Parameters<typeof window.showWarningMessage>;

type OptionalOptions<
	T extends [message: string, options: unknown, ...items: unknown[]],
> = T extends [message: infer M, options: infer O, ...infer R]
	? [message: M, options?: O, ...items: R]
	: T;

type UsualReturnType = Thenable<MessageItem | undefined>;

type ShowMessageType = {
	(
		type: Extract<MessageType, "info">,
		...props: OptionalOptions<InfoMessageParams>
	): UsualReturnType;

	(
		type: Extract<MessageType, "error">,
		...props: OptionalOptions<ErrorMessageParams>
	): UsualReturnType;

	(
		type: Extract<MessageType, "warning">,
		...props: OptionalOptions<WarningMessageParams>
	): UsualReturnType;
};

const showMessage: ShowMessageType = (type, msg, options = {}, ...items) => {
	//

	if (type === "info") {
		return window.showInformationMessage(msg, options, ...items);
	}

	if (type === "warning") {
		return window.showWarningMessage(msg, options, ...items);
	}

	return window.showErrorMessage(msg, options, ...items);
};

export { showMessage };
export type { ShowMessageParams, ShowMessageType };
