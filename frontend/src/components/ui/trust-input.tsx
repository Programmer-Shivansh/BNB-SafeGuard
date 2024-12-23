"use client";
import { useState } from "react";
import { RainbowButton } from "./rainbow-button";

interface TrustInputProps {
  onSubmit: (value: string) => void;
}

export function TrustInput({ onSubmit }: TrustInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <p className="text-2xl sm:text-3xl text-foreground font-newKansasLight">
        Can I trust your{" "}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-32 sm:w-40 bg-transparent border-b-2 border-primary focus:border-primary/50 outline-none px-2 font-newKansasExtraSwashLightItalic"
          placeholder=""
        />
      </p>
      <RainbowButton type="submit" className="!px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </RainbowButton>
    </form>
  );
}
