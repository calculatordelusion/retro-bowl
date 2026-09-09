import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

interface DirectAnswerBoxProps {
  question: string;
  answer: string | React.ReactNode;
  keyTakeaway?: string;
}

const DirectAnswerBox: React.FC<DirectAnswerBoxProps> = ({
  question,
  answer,
  keyTakeaway
}) => {
  return (
    <div className="bg-gradient-to-br from-retro-blue/90 to-retro-dark-blue border-2 border-retro-yellow/80 rounded-xl p-5 my-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-retro-yellow text-black font-pixel text-[9px] px-3 py-1 rounded-bl-lg font-bold flex items-center gap-1 shadow-sm">
        <Zap size={11} className="fill-black" />
        QUICK ANSWER
      </div>

      <h3 className="text-retro-yellow font-pixel text-xs sm:text-sm mb-3 flex items-start gap-2 pr-24">
        <CheckCircle2 size={18} className="text-retro-green flex-shrink-0 mt-0.5" />
        <span>{question}</span>
      </h3>

      <div className="text-retro-light-gray text-sm leading-relaxed mb-3">
        {answer}
      </div>

      {keyTakeaway && (
        <div className="bg-black/40 border border-retro-gray/50 rounded-lg px-3 py-2 text-xs text-retro-white flex items-center gap-2">
          <span className="text-retro-green font-bold">Key Takeaway:</span>
          <span>{keyTakeaway}</span>
        </div>
      )}
    </div>
  );
};

export default DirectAnswerBox;
