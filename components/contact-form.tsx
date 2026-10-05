"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { site } from "@/data/site";

const NAME_MIN = 2;
const NAME_MAX = 80;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldName = "name" | "email" | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const touched = useRef(new Set<FieldName>());
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<FieldName, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
    name: nameRef,
    email: emailRef,
    message: messageRef,
  };

  function validateField(field: FieldName, rawValue = values[field]): string | undefined {
    const value = rawValue.trim();

    if (!value) {
      return field === "name"
        ? "Ingresá tu nombre."
        : field === "email"
          ? "Ingresá tu email."
          : "Escribí tu mensaje.";
    }

    if (field === "name" && (value.length < NAME_MIN || value.length > NAME_MAX)) {
      return `Usá entre ${NAME_MIN} y ${NAME_MAX} caracteres.`;
    }

    if (field === "email" && !EMAIL_PATTERN.test(value)) {
      return "Ingresá un email válido, por ejemplo nombre@dominio.com.";
    }

    if (
      field === "message" &&
      (value.length < MESSAGE_MIN || value.length > MESSAGE_MAX)
    ) {
      return `El mensaje debe tener entre ${MESSAGE_MIN} y ${MESSAGE_MAX} caracteres.`;
    }

    return undefined;
  }

  function handleBlur(field: FieldName) {
    touched.current.add(field);
    setErrors((previous) => ({
      ...previous,
      [field]: validateField(field),
    }));
  }

  function handleChange(field: FieldName, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setStatus("");

    if (touched.current.has(field)) {
      setErrors((previous) => ({
        ...previous,
        [field]: validateField(field, value),
      }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fields: FieldName[] = ["name", "email", "message"];
    const nextErrors: Errors = {};

    for (const field of fields) {
      const message = validateField(field);
      if (message) {
        nextErrors[field] = message;
      }
      touched.current.add(field);
    }

    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus("Revisá los campos indicados antes de continuar.");
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    const name = values.name.trim().replace(/[\r\n]/g, " ");
    const subject = `Consulta desde el portfolio · ${name}`;
    const body = [
      `Nombre: ${name}`,
      `Email de contacto: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");

    setStatus(
      "Mensaje preparado. Se abrió tu aplicación de correo para revisarlo y enviarlo.",
    );

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const messageLength = values.message.length;

  return (
    <form
      aria-label="Formulario de contacto"
      className="contact-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="contact-form__grid">
        <div className="field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            aria-describedby="contact-name-error"
            aria-errormessage="contact-name-error"
            aria-invalid={errors.name ? "true" : undefined}
            autoComplete="name"
            id="contact-name"
            maxLength={NAME_MAX}
            name="name"
            onBlur={() => handleBlur("name")}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="Tu nombre"
            ref={nameRef}
            type="text"
            value={values.name}
          />
          <span className="field__error" id="contact-name-error">
            {errors.name}
          </span>
        </div>

        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input
            aria-describedby="contact-email-error"
            aria-errormessage="contact-email-error"
            aria-invalid={errors.email ? "true" : undefined}
            autoComplete="email"
            id="contact-email"
            maxLength={254}
            name="email"
            onBlur={() => handleBlur("email")}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="nombre@dominio.com"
            ref={emailRef}
            type="email"
            value={values.email}
          />
          <span className="field__error" id="contact-email-error">
            {errors.email}
          </span>
        </div>

        <div className="field field--wide">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea
            aria-describedby="contact-message-hint contact-message-error"
            aria-errormessage="contact-message-error"
            aria-invalid={errors.message ? "true" : undefined}
            id="contact-message"
            maxLength={MESSAGE_MAX}
            name="message"
            onBlur={() => handleBlur("message")}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder="Contame qué necesitás y en qué estás trabajando."
            ref={messageRef}
            rows={6}
            value={values.message}
          />
          <div className="field__meta">
            <span id="contact-message-hint">
              Entre {MESSAGE_MIN} y {MESSAGE_MAX} caracteres.
            </span>
            <span aria-hidden="true">
              {messageLength} / {MESSAGE_MAX}
            </span>
          </div>
          <span className="field__error" id="contact-message-error">
            {errors.message}
          </span>
        </div>
      </div>

      <div className="contact-form__footer">
        <button className="button button--primary" type="submit">
          Enviar mensaje
          <Icon name="arrowUpRight" />
        </button>
        <p className="contact-form__note">
          Se abrirá tu aplicación de correo con el mensaje ya escrito. Si no
          se abre, escribime directo a {site.email}.
        </p>
      </div>

      <p
        aria-atomic="true"
        aria-live="polite"
        className="contact-form__status"
        role="status"
      >
        {status}
      </p>
    </form>
  );
}