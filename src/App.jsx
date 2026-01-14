import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './components/Terminal';
import { tutorialSteps } from './data/tutorialData';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = tutorialSteps[currentStepIndex];

  const handleStepComplete = () => {
    if (currentStepIndex < tutorialSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* Sidebar / Instructions */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-1/3 flex flex-col border-r border-slate-800 bg-slate-900/50 backdrop-blur"
      >
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-3">
            <TerminalIcon className="text-blue-400" />
            Mahbub's CLI Academy
          </h1>
          <p className="text-slate-400 text-sm mt-2">Interactive Command Line Course</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-400 uppercase tracking-wider font-semibold">
              <span>Progress</span>
              <span>{Math.round(((currentStepIndex) / tutorialSteps.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStepIndex) / tutorialSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Step {currentStep.id} of {tutorialSteps.length}
              </span>
              <h2 className="text-3xl font-bold text-white">{currentStep.title}</h2>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              {currentStep.content}
            </p>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                <ChevronRight size={16} />
                Task
              </h3>
              <p className="text-white font-medium">{currentStep.hint}</p>
            </div>

            {currentStepIndex > 0 && (
                 <div className="pt-4 border-t border-slate-800">
                    <h4 className="text-sm text-slate-500 mb-3">Completed Steps</h4>
                    <div className="space-y-2">
                        {tutorialSteps.slice(0, currentStepIndex).map(step => (
                            <div key={step.id} className="flex items-center gap-2 text-green-400 text-sm">
                                <CheckCircle size={14} />
                                <span className="line-through opacity-50">{step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </motion.div>
        </div>

        {/* Footer with Branding */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-400">Created by Mahbub Hassan</p>
            <p>Graduate Student & Non-Asean Scholar</p>
            <p>Civil Engineering, Chulalongkorn University</p>
        </div>
      </motion.div>

      {/* Main Content / Terminal Area */}
      <div className="flex-1 p-8 flex flex-col bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 h-full flex flex-col max-w-5xl mx-auto w-full">
            <div className="flex-1 flex flex-col">
                <Terminal 
                    currentStep={currentStep} 
                    onStepComplete={handleStepComplete} 
                />
            </div>
            
            <div className="mt-4 text-center text-slate-500 text-sm">
                Press <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-300 font-mono text-xs">Enter</kbd> to execute commands
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;