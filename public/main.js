const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

app.on("ready", () => {
    app.setActivationPolicy("regular");
    app.setAppUserModelId(process.execPath);

    app.setAboutPanelOptions({
        applicationName: "유성구청 보훈수당 관리 프로그램",
        applicationVersion: app.getVersion(),
    });

    app.on("will-finish-launching", () => {
        app.dock.hide();
    });

    const win = new BrowserWindow({
        width: 1536,
        height: 864,
        icon: path.join(__dirname, "/favicon.ico"),
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            contextIsolation: false,
        },
    });

    const startUrl =
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, "../build/index.html"),
            protocol: "file:",
            slashes: true,
        });

    win.loadURL(startUrl);
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
