import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  props: {
    githubLink: "https://github.com/vue-microfrontends/root-config",
  },
  loaders: {
    navbar: "<h1>Loading navbar</h1>",
  },
  errors: {
    navbar: "<h1>Failed to load navbar</h1>",
  },
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

// Delay starting the layout engine until the styleguide CSS is loaded
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

System.import("@vue-mf/styleguide").then(() => {
  // Activate the layout engine once the styleguide CSS is loaded
  layoutEngine.activate();
});

start();
