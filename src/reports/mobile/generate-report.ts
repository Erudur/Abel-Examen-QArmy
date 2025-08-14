// src/reports/mobile/generate-report.ts

import { generate } from 'multiple-cucumber-html-reporter';
import { resolve } from 'path';

generate({
  // Directorio donde se encuentra el JSON generado por Cucumber
  jsonDir: resolve(__dirname),
  // Directorio donde se generará el HTML
  reportPath: resolve(__dirname, 'html'),
  metadata: {
    browser: {
      name: 'Appium',
      version: 'N/A'
    },
    device: 'Android device',
    platform: {
      name: 'Android',
      version: '11.0'  // Actualizá según corresponda
    }
  },
  customData: {
    title: 'Información de la Ejecución',
    data: [
      { label: 'Proyecto', value: 'k0lmena Mobile Automation' },
      { label: 'Ejecutado', value: new Date().toLocaleString() }
    ]
  }
});