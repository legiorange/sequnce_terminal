// import 'xterm/dist/xterm.css';
// import { Terminal } from 'xterm';
var xterm_1 = require("xterm");
var xterm_addon_fit_1 = require("xterm-addon-fit");
var terminal = new xterm_1.Terminal();
var fitAddon = new xterm_addon_fit_1.FitAddon();
var terminalContainer = document.getElementById('terminal');
terminal.loadAddon(fitAddon);
terminal.open(terminalContainer);
fitAddon.fit();
function prompt(term) {
    term.write('\r\nguest@SequnceE:~$ ');
}
