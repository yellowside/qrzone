import React from "react";
import { cn } from "@/lib/utils";

// QRzone 文字 Logo
export function QrbtfLogo(props: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-black tracking-tight leading-none select-none",
        props.className,
      )}
    >
      微思格 <span className="opacity-60">QRzone</span>
    </span>
  );
}
