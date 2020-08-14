// regenerator-runtime is to support async/await syntax in ESNext.
// If you target latest browsers (have native support), or don't use async/await, you can remove regenerator-runtime.
import "regenerator-runtime/runtime";
import * as environment from "../config/environment.json";
import { PLATFORM } from "aurelia-pal";
import {
  FASTDesignSystemProvider,
  FASTCard,
  FASTButton,
  FASTTextField,
  FASTCheckbox,
} from "@microsoft/fast-components";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import "app.css";

/*
 * Ensure that tree-shaking doesn't remove these components from the bundle.
 * There are multiple ways to prevent tree shaking, of which this is one.
 */
FASTDesignSystemProvider;
FASTCard;
FASTButton;
FASTTextField;
FASTCheckbox;

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"))
    .plugin(PLATFORM.moduleName("aurelia-fontawesome"), {
      icons: [fab, faGithub],
    });

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
