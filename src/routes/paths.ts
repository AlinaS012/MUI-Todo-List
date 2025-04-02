export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/`,
  search: `/${rootPaths.pageRoot}/search`,
  inbox: `/${rootPaths.pageRoot}/inbox`,
  today: `/${rootPaths.pageRoot}/today`,
  upcoming: `/${rootPaths.pageRoot}/upcoming`,
  filtersandlabels: `/${rootPaths.pageRoot}/filtersandlabels`,
  home: `/${rootPaths.root}`,
  mywork: `/${rootPaths.pageRoot}/mywork`,
  404: `/${rootPaths.errorRoot}/404`,
};
