"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "src/reports/api", // Directorio donde está el archivo cucumber-report.json
    reportPath: "src/reports/api", // Carpeta donde se generará el reporte HTML
    metadata: {
        browser: {
            name: "chrome",
            version: "latest"
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10"
        }
    },
    customData: {
        title: "Test Execution Report",
        data: [
            { label: "Project", value: "K0lmena" },
            { label: "Execution Date", value: new Date().toLocaleString() }
        ]
    }
});
