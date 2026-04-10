import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { id: 1, text: "Acesso autorizado. Digite 'help' para listar os comandos disponíveis.", type: 'output' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';

      switch (cmd) {
        case 'help':
          output = "COMANDOS:\n  whoami   - Exibe informações do usuário\n  skills   - Lista de competências técnicas\n  clear    - Limpa a tela do terminal\n  status   - Exibe o status do sistema";
          break;
        case 'whoami':
          output = "Gustavo de Araújo Vieira, formado em Análise e Desenvolvimento de Sistemas.\nPerfil determinado e organizado, focado em resolução de problemas e aprendizado contínuo.\nAtualmente atuo como Analista de Suporte na MaxData Sistemas em Imperatriz-MA.";
          break;
        case 'skills':
          output = "> HARD SKILLS: Python, SQL, Java, Banco de Dados, Hardware e Software\n> AUTOMAÇÃO: Power BI, Nagios, Excel Automatizado, PyAutoGUI\n> SOFT SKILLS: Proatividade, Atenção aos detalhes, Multitarefas";
          break;
        case 'status':
          output = `[OK] Conexão estabelecida a partir de Imperatriz - MA.\n[OK] Servidor operacional.\n[OK] Foco na resolução de problemas: 100%.`;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          output = "";
          break;
        default:
          output = `Comando não reconhecido: '${cmd}'. Digite 'help' para ajuda.`;
      }

      setHistory(prev => [
        ...prev,
        { id: Date.now(), text: `guest@gustavo-vieira:~$ ${cmd}`, type: 'input' },
        ...(output ? [{ id: Date.now() + 1, text: output, type: 'output' }] : [])
      ]);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div 
        onClick={focusInput}
        className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg shadow-2xl overflow-hidden cursor-text transition-all hover:border-hacker/50"
      >
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs flex-grow justify-center font-sans tracking-widest">
            <TerminalIcon size={12} />
            <span>terminal_gustavo_vieira.exe</span>
          </div>
        </div>

        <div className="p-4 h-64 overflow-y-auto font-mono text-sm">
          {history.map((line) => (
            <div key={line.id} className={`mb-2 whitespace-pre-wrap ${line.type === 'input' ? 'text-slate-300' : 'text-hacker/90'}`}>
              {line.text}
            </div>
          ))}
          <div className="flex items-center text-slate-300 mt-2">
            <span className="text-hacker mr-2">guest@gustavo-vieira:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-grow text-slate-300 font-mono"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}