// Disable the "Powered by Obsidian" text in the graph once the renderer is available
function setupGraphSettings() {
    if (app && app.graph && app.graph.renderer) {
        app.graph.renderer.hidePowerTag = true;
    } else {
        setTimeout(setupGraphSettings, 10); // Retry after 10ms
    }
}

// Initialize the setting
setupGraphSettings();