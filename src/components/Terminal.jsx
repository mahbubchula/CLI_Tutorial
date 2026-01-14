import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = ({ currentStep, onStepComplete }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Last login: ' + new Date().toLocaleString() },
    { type: 'output', content: 'Welcome to the Interactive CLI Tutorial v1.0.0' },
    { type: 'output', content: 'Type the command shown in the instructions to proceed.\n' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      
      // Add command to history
      const newHistory = [...history, { type: 'command', content: cmd }];
      
      // Process command
      const cleanCmd = cmd.toLowerCase().replace(/\s+/g, ' ').trim();
      const cleanExpected = currentStep.command.toLowerCase().trim();

      if (cleanCmd === cleanExpected) {
        newHistory.push({ type: 'success', content: currentStep.expectedOutput });
        setHistory(newHistory);
        setInput('');
        setTimeout(() => {
            onStepComplete();
        }, 1500); // Slightly longer delay to read output
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
      } else {
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Try '${currentStep.command}'` });
        setHistory(newHistory);
        setInput('');
      }
    }
  };

  return (
    <div 
      className="flex flex-col h-full bg-black font-mono text-sm p-4 rounded-lg border border-gray-800 shadow-2xl overflow-hidden"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2 text-gray-400">
        <TerminalIcon size={16} />
        <span>mahbu@tutorial-env: ~</span>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-2">
        {history.map((entry, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${ 
                    entry.type === 'command' ? 'text-white' :
                    entry.type === 'error' ? 'text-red-400' :
                    entry.type === 'success' ? 'text-green-400' : 'text-gray-400'
                }`}
            >
                {entry.type === 'command' && <span className="text-green-500 mr-2">➜ ~</span>}
                <span className="whitespace-pre-wrap">{entry.content}</span>
            </motion.div>
        ))}
        
        <div className="flex items-center text-white">
          <span className="text-green-500 mr-2">➜ ~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-white"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
