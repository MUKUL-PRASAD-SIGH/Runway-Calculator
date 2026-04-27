"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: number;
  onChange: (val: number) => void;
  icon: LucideIcon;
  placeholder?: string;
  className?: string;
}

export default function InputField({ label, value, onChange, icon: Icon, placeholder, className }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const displayValue = value === 0 ? "" : new Intl.NumberFormat("en-IN").format(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (raw === "") { onChange(0); return; }
    const num = parseFloat(raw);
    if (!isNaN(num) && num >= 0) onChange(num);
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest pl-1">{label}</label>
      <div className={cn("relative flex items-center rounded-2xl glass-input px-5 py-4 group transition-all duration-300", isFocused ? "border-primary/40 ring-4 ring-primary/5" : "border-white/5")}>
        <Icon size={20} className={cn("mr-4 transition-colors", isFocused ? "text-primary" : "text-white/20 group-hover:text-white/40")} />
        <input type="text" value={displayValue} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={placeholder} className="w-full bg-transparent text-xl font-bold tracking-tight text-white outline-none placeholder-white/10" />
      </div>
    </div>
  );
}
