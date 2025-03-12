// export const rootPaths = {
//   root: '/',
//   pageRoot: 'pages',
//   authRoot: 'auth',
//   errorRoot: 'error',
// };

// export default {
//   dashboard: `/`,
//   analytics: `/${rootPaths.pageRoot}/analytics`,
//   invoice: `/${rootPaths.pageRoot}/invoice`,
//   schedule: `/${rootPaths.pageRoot}/schedule`,
//   calendar: `/${rootPaths.pageRoot}/calendar`,
//   messages: `/${rootPaths.pageRoot}/messages`,
//   notification: `/${rootPaths.pageRoot}/notification`,
//   settings: `/${rootPaths.pageRoot}/settings`,

//   signin: `/${rootPaths.authRoot}/signin`,
//   signup: `/${rootPaths.authRoot}/signup`,
//   resetPassword: `/${rootPaths.authRoot}/reset-password`,
//   404: `/${rootPaths.errorRoot}/404`,
// };
export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/`,
  // analytics: `/${rootPaths.pageRoot}/search`,
  // invoice: `/${rootPaths.pageRoot}/inbox`,
  // schedule: `/${rootPaths.pageRoot}/schedule`,
  // calendar: `/${rootPaths.pageRoot}/calendar`,
  // messages: `/${rootPaths.pageRoot}/messages`,
  // notification: `/${rootPaths.pageRoot}/notification`,
  // settings: `/${rootPaths.pageRoot}/settings`,

  // signin: `/${rootPaths.authRoot}/signin`,
  // signup: `/${rootPaths.authRoot}/signup`,
  // resetPassword: `/${rootPaths.authRoot}/reset-password`,

  search: `/${rootPaths.pageRoot}/search`,
  inbox: `/${rootPaths.pageRoot}/inbox`,
  today: `/${rootPaths.pageRoot}/today`,
  upcoming: `/${rootPaths.pageRoot}/upcoming`,
  filtersandlabels: `/${rootPaths.pageRoot}/filtersandlabels`,
  home: `/${rootPaths.root}`,
  mywork: `/${rootPaths.pageRoot}/mywork`,
  404: `/${rootPaths.errorRoot}/404`,
};
