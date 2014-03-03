/**
 * Rdio Player Controller
 * 
 * Wraps loading the rdio page and adds it to tray system.
 **/

var gui = require('nw.gui');

// Get the window and binds to open/close events
var win = gui.Window.get();
win.on('loaded', function() {this.show();});
win.on('close', function() {this.hide();});

// Create a menu to exit from the App
var exitItem = new gui.MenuItem({
    label: 'Exit', 
    click: function() {
	// forces closing the window
	win.close(true);
    }
});
var menu = new gui.Menu();
menu.append(exitItem);

// Define the tray to focus on the App when click and have an exit menu
var manifest = gui.App.manifest;
var tray = new gui.Tray({ title: manifest.window.name, 
			  icon: manifest.window.icon});
tray.on('click', function() {win.focus();});
tray.menu = menu;
