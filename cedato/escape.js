export function registerBidder() { }
export function getIabSubCategory() { return ''; }

export const config = {
  getConfig: () => false,
};

export const Renderer = {
  install: () => ({
    setRender: () => { },
    setEventHandlers: () => { },
  }),
};
