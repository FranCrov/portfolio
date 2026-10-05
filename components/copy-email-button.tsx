"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { site } from "@/data/site";

const RESET_DELAY = 3200;

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  async function handleCopy() {
    clearTimeout(timeout.current);

    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setStatus("Email copiado al portapapeles.");
      timeout.current = setTimeout(() => {
        setCopied(false);
        setStatus("");
      }, RESET_DELAY);
    } catch {
      setCopied(false);
      setStatus("No pude copiar. Seleccioná el email y copialo manualmente.");
    }
  }

  return (
    <>
      <button
        aria-label={copied ? "Email copiado" : "Copiar dirección de email"}
        className="copy-email"
        data-copied={copied ? "true" : undefined}
        onClick={handleCopy}
        type="button"
      >
        <Icon name={copied ? "check" : "copy"} />
      </button>
      <span
        aria-atomic="true"
        aria-live="polite"
        className="copy-status"
        role="status"
      >
        {status}
      </span>
    </>
  );
}