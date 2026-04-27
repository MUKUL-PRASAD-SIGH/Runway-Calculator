import React, { useState } from "react";
import { cn } from "../utils/cn";

export default function InputField({
  label,
  value,
  onChange,
  icon: Icon,
  placeholder,
  className,
  isCurrency = true,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = isCurrency
    ? value
      ? new Intl.NumberFormat("en-IN").format(value)
      : ""
    : value;

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/,/g, "");
    if (rawValue === "") {
      onChange(0);
      return;
    }
    const num = Number(rawValue);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label className="text-sm font-medium text-white/60 tracking-wide uppercase text-xs">
        {label}
      </label>
      <div
        className={cn(
          "relative flex items-center rounded-2xl overflow-hidden glass-input group",
          isFocused ? "shadow-[0_0_20px_rgba(99,102,241,0.2)]" : ""
        )}
      >
        <div className={cn(
          "flex items-center justify-center pl-5 pr-3 transition-colors duration-300",
          isFocused ? "text-brand-500" : "text-white/40 group-hover:text-white/60"
        )}>
          {Icon ? <Icon size={22} strokeWidth={1.5} /> : <span className="font-medium text-xl">₹</span>}
        </div>
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full py-4 pr-5 bg-transparent outline-none text-white font-semibold text-2xl tracking-tight placeholder-white/20"
        />
        {/* Subtle inner highlight */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 mix-blend-overlay"></div>
      </div>
    </div>
  );
}
