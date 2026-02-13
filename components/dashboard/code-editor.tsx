"use client";
import { FileCode, Copy } from "lucide-react";

export function CodeEditor({ code, language }: { code: string; language: string }) {
  const copyCode = () => navigator.clipboard.writeText(code);

  return (
    <div className="h-full flex flex-col rounded-lg border border-[#2a3142] bg-[#14171e] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#2a3142] bg-gray-900/50">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-[#10b981]" />
          <span className="text-sm font-medium">Source Code ({language})</span>
        </div>
        <button onClick={copyCode} className="p-1 hover:bg-white/10 rounded transition-colors">
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className="flex-1 overflow-auto p-4 font-mono text-sm text-green-400 whitespace-pre">
        <code>{code || "// AI generated code will appear here..."}</code>
      </pre>
    </div>
  );
}