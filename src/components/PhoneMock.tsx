// src/components/PhoneMock.tsx
import React from "react";

type Props = {
  label?: string;
  children?: React.ReactNode;
};

export default function PhoneMock({ label, children }: Props) {
  return (
    <div className="flex flex-col items-center">
      {label ? <p className="mb-3 text-sm text-zinc-600">{label}</p> : null}
      <div className="relative h-[560px] w-[280px] rounded-[2.5rem] bg-gradient-to-br from-purple-100 to-fuchsia-100 p-3 shadow-lg border border-purple-200">
        {/* Frame */}
        <div className="relative h-full w-full rounded-[2rem] bg-white overflow-hidden">
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-28 rounded-b-2xl bg-black/80" />
          {/* Screen */}
          {/* <div className="h-full w-full pt-6">{children ?? <MockScreenPlaceholder />}</div> */}
          <div
            className={`h-full w-full ${React.isValidElement(children) && typeof children.type === "string" && children.type === "img"
                ? ""
                : "pt-6"
              }`}
          >
            {children ?? <MockScreenPlaceholder />}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockScreenPlaceholder() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-zinc-50 to-zinc-100 grid place-items-center">
      <div className="text-center">
        <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-purple-200" />
        <p className="text-sm text-zinc-500">Espacio para mockup</p>
      </div>
    </div>
  );
}
