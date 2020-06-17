// import 'xterm/dist/xterm.css';
// import { Terminal } from 'xterm';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

const terminal = new Terminal();
const fitAddon = new FitAddon();
let terminalContainer = document.getElementById('terminal')

terminal.loadAddon(fitAddon);
terminal.open(terminalContainer);
fitAddon.fit();

function prompt(term) {
term.write('\r\nguest@SequnceE:~$ ');
}
