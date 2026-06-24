"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
};

/** Accessible, animated overlay modal used for all deep-dive content. */
export function Modal({ open, onClose, title, eyebrow, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Render into document.body so the fixed overlay can't be clipped or
  // re-positioned by ancestors that establish a containing block
  // (e.g. transform / filter / backdrop-filter / overflow-hidden).
  if (typeof document === "undefined" || !document.body) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink-950/80 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-850 p-7 shadow-2xl sm:rounded-3xl sm:p-10"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
          >
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
                {title && (
                  <h3 className="display-lg font-display text-fog-100">
                    {title}
                  </h3>
                )}
              </div>
              <button
                onClick={onClose}
                data-cursor="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-fog-300 transition-colors hover:border-indigo-400 hover:text-indigo-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2l12 12M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
