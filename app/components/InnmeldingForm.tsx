"use client";
// TODO: Integration target is iBooking. Await confirmation of embed/API path before wiring.
import { useState } from "react";

interface FormState {
  navn: string;
  epost: string;
  telefon: string;
}

interface FormErrors {
  navn?: string;
  epost?: string;
  telefon?: string;
}

export default function InnmeldingForm() {
  const [fields, setFields] = useState<FormState>({ navn: "", epost: "", telefon: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!fields.navn.trim()) e.navn = "Navn er påkrevd.";
    if (!fields.epost.trim()) e.epost = "E-post er påkrevd.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.epost))
      e.epost = "Oppgi en gyldig e-postadresse.";
    if (!fields.telefon.trim()) e.telefon = "Telefon er påkrevd.";
    else if (!/^[\d\s+\-()/]{8,}$/.test(fields.telefon.trim()))
      e.telefon = "Oppgi et gyldig telefonnummer.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    // TODO: send to iBooking API
    console.log("Innmelding:", fields);
    setSubmitted(true);
  };

  const setField = (k: keyof FormState, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const inputBase =
    "w-full border border-line rounded-btn px-4 py-2.5 text-[14px] text-ink bg-white placeholder:text-gravel";
  const inputError = "border-error";

  if (submitted) {
    return (
      <p className="text-[14px] text-ok py-4">
        Takk! Vi tar kontakt med deg snart for å fullføre innmeldingen.
      </p>
    );
  }

  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <label htmlFor="inn-navn" className="block text-[13px] font-medium text-ink mb-1">
          Navn
        </label>
        <input
          id="inn-navn"
          type="text"
          autoComplete="name"
          value={fields.navn}
          onChange={(e) => setField("navn", e.target.value)}
          className={`${inputBase} ${errors.navn ? inputError : ""}`}
          aria-invalid={!!errors.navn}
          aria-describedby={errors.navn ? "inn-navn-err" : undefined}
        />
        {errors.navn && (
          <p id="inn-navn-err" role="alert" className="text-[12px] text-error mt-1">
            {errors.navn}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inn-epost" className="block text-[13px] font-medium text-ink mb-1">
          E-post
        </label>
        <input
          id="inn-epost"
          type="email"
          autoComplete="email"
          value={fields.epost}
          onChange={(e) => setField("epost", e.target.value)}
          className={`${inputBase} ${errors.epost ? inputError : ""}`}
          aria-invalid={!!errors.epost}
          aria-describedby={errors.epost ? "inn-epost-err" : undefined}
        />
        {errors.epost && (
          <p id="inn-epost-err" role="alert" className="text-[12px] text-error mt-1">
            {errors.epost}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inn-telefon" className="block text-[13px] font-medium text-ink mb-1">
          Telefon
        </label>
        <input
          id="inn-telefon"
          type="tel"
          autoComplete="tel"
          value={fields.telefon}
          onChange={(e) => setField("telefon", e.target.value)}
          className={`${inputBase} ${errors.telefon ? inputError : ""}`}
          aria-invalid={!!errors.telefon}
          aria-describedby={errors.telefon ? "inn-telefon-err" : undefined}
        />
        {errors.telefon && (
          <p id="inn-telefon-err" role="alert" className="text-[12px] text-error mt-1">
            {errors.telefon}
          </p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-ink text-white text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-graphite transition-colors duration-150"
      >
        Bli medlem
      </button>
    </div>
  );
}
