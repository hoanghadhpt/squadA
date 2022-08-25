/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:browser:launch', (browser = {}, args) => {
    if (browser.family === 'chrome') {
      // const originalArgs = args;
      // NOTE(nms): https://peter.sh/experiments/chromium-command-line-switches/
      // NOTE(nms): disable-gpu is the only truly necessary argument to strip
      //args = args.filter(arg => !/disable-gpu|disable-setuid-sandbox|no-sandbox|enable-automation/.test(arg));
      // const strippedArgs = originalArgs.filter(arg => !args.includes(arg));
      // strippedArgs.length ? console.log('stripped args: ', strippedArgs) : console.log('args: ', originalArgs);
      // args.push('--enable-logging');
      // args.push('--use-gl=swiftshader');
      // args.push('--ignore-gpu-blacklist');
      // args.push('--start-fullscreen');
      // args.push('--user-data-dir=./cypress/chromium-profile');
    } else if (browser.family === 'electron') {
      // NOTE(nms): https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
      // NOTE(nms): https://github.com/electron/electron/blob/v5.0.10/docs/api/browser-window.md#new-browserwindowoptions
      // NOTE(nms): one or more of these may work for additionalArguments, supplied to Chromium's renderer process
      args.webPreferences.additionalArguments = [
        ...(args.webPreferences.additionalArguments || []),
        '--disable-gpu', // Disables GPU hardware acceleration. If software renderer is not in place, then the GPU process won't launch.
        '--use-gl=swiftshader', // Select which implementation of GL the GPU process should use. Options are: desktop: whatever desktop OpenGL the user has installed (Linux and Mac default). egl: whatever EGL / GLES2 the user has installed (Windows default - actually ANGLE). swiftshader: The SwiftShader software renderer.
        '--override-use-software-gl-for-tests', // Forces the use of software GL instead of hardware gpu.
        '--use-gpu-in-tests', // Use hardware gpu, if available, for tests.
      ];
    }
    return args;
  });

  return config;
};