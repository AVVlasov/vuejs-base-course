import "systemjs/dist/s";
import "systemjs/dist/extras/amd";
import "systemjs/dist/extras/named-register";
import "systemjs/dist/extras/named-exports";
import "systemjs/dist/extras/transform";
import { createBrowserHistory } from "history";

const systemJSImport = async requestUrl => {
  const { default: component, mount, unmount } = await System.import(
    requestUrl
  );
  return { component, mount, unmount };
};

const getPublicPath = (apps, path) => {
  const searchKey = path.substr(1);
  return `./${searchKey}/${apps[searchKey].version}/`;
};

export default async ({ apps, navigations, config }) => {
  const history = createBrowserHistory();

  let prevPathname = window.location.pathname;

  const publicPath = getPublicPath(apps, history.location.pathname);

  __webpack_public_path__ = `${publicPath}${__webpack_public_path__}`;

  const app = `${publicPath}index.js`;

  const { component, mount, unmount } = await systemJSImport(app);

  mount(component.default);

  history.listen(location => {
    if (location.pathname !== prevPathname) {
      prevPathname = location.pathname;
      unmount();
    }
  });
};
