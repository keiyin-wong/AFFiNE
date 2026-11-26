'use strict';

const native = require('./server-native.x64.node');
const resolveEntitlement = native.resolveEntitlementV1;
const unlimitedSeats = 2_147_483_647;

native.resolveEntitlementV1 = function (input) {
  const entitlement = resolveEntitlement(input);
  if (
    input.deploymentType === 'selfhosted' &&
    entitlement.plan === 'selfhost_free' &&
    entitlement.valid &&
    entitlement.quota.seatLimit > 0
  ) {
    entitlement.quota.seatLimit = unlimitedSeats;
  }
  return entitlement;
};
