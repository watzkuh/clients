import { StateService } from "@bitwarden/common/platform/abstractions/state.service";
import { StorageOptions } from "@bitwarden/common/platform/models/domain/storage-options";

import { Account } from "../../models/account";

export abstract class ElectronStateService extends StateService<Account> {
  getDismissedBiometricRequirePasswordOnStart: (options?: StorageOptions) => Promise<boolean>;
  setDismissedBiometricRequirePasswordOnStart: (options?: StorageOptions) => Promise<void>;
}
