"use client";
import { Cable, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function WiringGuide({ guide }: { guide: string }) {
  return (
    <div className="h-full flex flex-col rounded-lg border border-[#2a3142] bg-[#14171e] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#2a3142] bg-gray-900/50">
        <Cable className="h-4 w-4 text-[#10b981]" />
        <span className="text-sm font-medium">Hardware Wiring Guide</span>
      </div>
      <div className="flex-1 overflow-auto p-4 prose prose-invert prose-sm max-w-none">
        {guide ? (
          <ReactMarkdown>{guide}</ReactMarkdown>
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-30 text-center">
            <AlertTriangle className="h-10 w-10 mb-2" />
            <p>Describe your robot to see wiring steps.</p>
          </div>
        )}
      </div>
    </div>
  );
}