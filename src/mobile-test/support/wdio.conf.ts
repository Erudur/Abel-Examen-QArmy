// src/mobile-test/support/wdio.conf.ts

import type { Options } from '@wdio/types';
import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config();

export const config: Options.Testrunner = {
  //
  // === EJECUCIÓN EN LOCAL/APPIUM ===
  runner: 'local',
  port: 4723,
  services: ['appium'],
  //

  // === EJECUCIÓN EN BROWSERSTACK ===
  // Descomentar estas líneas para BrowserStack:
  /*
  runner: 'browserstack',
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,
  services: ['browserstack'],
  */

  specs: [ resolve(__dirname, '../features/**/*.feature') ],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: [ resolve(__dirname, '../steps/**/*.ts') ],
    timeout: 60000,
    failFast: false,
    format: [
      'pretty',
      `json:${resolve(__dirname, '../../reports/mobile/cucumber-report.json')}`
    ]
  },
  autoCompileOpts: {
    tsNodeOpts: {
      transpileOnly: true,
      project: resolve(__dirname, '../tsconfig.json')
    }
  },
  capabilities: [
    {

      // --- DISPOSITIVO FÍSICO LOCAL ---

      platformName: 'Android',
      'appium:deviceName': 'S25 Ultra',
      'appium:udid': 'R5CY12AHTBH',
      'appium:platformVersion': '11.0',
      'appium:app': resolve(__dirname, '../apps/app.apk'),
      'appium:automationName': 'UiAutomator2',


      //
      // --- EMULADOR LOCAL ---
      /*
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      // no hace falta udid
      'appium:platformVersion': '12.0',
      'appium:app': resolve(__dirname, '../apps/app.apk'),
      'appium:automationName': 'UiAutomator2',
      */

      //
      // --- BROWSERSTACK ---
      /*
      platformName: 'Android',
      'appium:app': 'bs://<APP_ID_GENERADO_EN_BROWSERSTACK>',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0',
        projectName: 'k0lmena Mobile',
        buildName: 'Build 1.0',
        sessionName: 'Mobile Test on BrowserStack',
        userName: process.env.BROWSERSTACK_USER,
        accessKey: process.env.BROWSERSTACK_KEY,
        appiumVersion: '1.22.0',
      },
      */
    }
  ]
} as Options.Testrunner & { autoCompileOpts?: Record<string, any> };
