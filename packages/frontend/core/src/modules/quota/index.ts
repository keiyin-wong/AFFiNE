export { WorkspaceQuotaService } from './services/quota';
export { QuotaCheck } from './views/quota-check';

// The quota API uses the maximum signed 32-bit seat count for uncapped workspaces.
export const UNLIMITED_WORKSPACE_MEMBERS = 2_147_483_647;

import { type Framework } from '@toeverything/infra';

import { NbstoreService } from '../storage';
import { WorkspaceScope, WorkspaceService } from '../workspace';
import { WorkspaceQuota } from './entities/quota';
import { WorkspaceQuotaService } from './services/quota';
import { WorkspaceQuotaStore } from './stores/quota';

export function configureQuotaModule(framework: Framework) {
  framework
    .scope(WorkspaceScope)
    .service(WorkspaceQuotaService)
    .store(WorkspaceQuotaStore, [NbstoreService])
    .entity(WorkspaceQuota, [WorkspaceService, WorkspaceQuotaStore]);
}
