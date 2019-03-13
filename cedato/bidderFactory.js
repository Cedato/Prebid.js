const adapters = [];
export function registerBidder(spec) {
  const aliases = Array.isArray(spec.aliases) ? spec.aliases : [];
  aliases.push(spec.code);
  aliases.forEach(alias => {
    adapters.push({
      code: alias,
      spec,
    });
  });
}
export function getAdapter(bid) {
  if (!bid || !bid.bidder) {
    return null;
  }

  let spec;
  for (const adapter of adapters) {
    if (adapter.code == bid.bidder) {
      spec = adapter.spec;
      break;
    }
  }
  return spec;
}
export function getIabSubCategory() { return ''; }
