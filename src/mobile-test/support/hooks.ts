// src/mobile-test/support/hooks.ts

import { Before, After } from '@wdio/cucumber-framework';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

Before(async function () {
  await browser.reloadSession();
});

After(async function (scenario) {
  if (scenario.result && scenario.result.status !== 'PASSED') {
    try {
      // Tomamos el screenshot
      const screenshot = await browser.takeScreenshot();
      console.log(">> Screenshot capturado: ", screenshot ? "Sí" : "No");
      
      // Verificamos si se obtuvo data
      if (screenshot && screenshot.length > 0) {
        // Adjuntamos el screenshot al reporte de Cucumber, si attach está disponible
        if (typeof this.attach === 'function') {
          await this.attach(screenshot, 'image/png');
          console.log(">> Screenshot adjuntado al reporte.");
        } else {
          console.log(">> this.attach no está disponible.");
        }
        
        // Creamos la carpeta de reportes si no existe
        const reportDir = resolve(__dirname, '../../reports/mobile');
        if (!existsSync(reportDir)) {
          mkdirSync(reportDir, { recursive: true });
        }
        
        // Guardamos el screenshot en la carpeta de reportes
        const screenshotFile = resolve(reportDir, `screenshot-${Date.now()}.png`);
        writeFileSync(screenshotFile, screenshot, 'base64');
        console.log(`>> Screenshot guardado en ${screenshotFile}`);
      } else {
        console.log(">> No se obtuvo contenido en el screenshot.");
      }
    } catch (err) {
      console.error(">> Error al tomar screenshot:", err);
    }
  }
});
