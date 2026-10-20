import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldTone = "default" | "onDark";

const LABEL_STYLES: Record<FieldTone, string> = {
  default: "text-primary",
  onDark: "text-white/90",
};

const CONTROL_STYLES: Record<FieldTone, string> = {
  default: "border-input bg-card text-foreground placeholder:text-muted-foreground",
  onDark: "border-white/40 bg-transparent text-white placeholder:text-white/60",
};

const CONTROL_BASE =
  "text-body w-full rounded-md border px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent";

type FieldWrapperProps = {
  name: string;
  label: string;
  tone?: FieldTone;
  children: (controlClassName: string) => ReactNode;
};

function FieldWrapper({ name, label, tone = "default", children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={name} className={`text-label mb-2 block ${LABEL_STYLES[tone]}`}>
        {label}
      </label>
      {children(`${CONTROL_BASE} ${CONTROL_STYLES[tone]}`)}
    </div>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  tone?: FieldTone;
  icon?: ReactNode;
};

export function TextField({ name, label, tone, icon, ...inputProps }: TextFieldProps) {
  return (
    <FieldWrapper name={name} label={label} tone={tone}>
      {(controlClassName) => (
        <div className="relative">
          {icon && (
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {icon}
            </span>
          )}
          <input
            id={name}
            name={name}
            className={`${controlClassName} ${icon ? "pl-9" : ""}`}
            {...inputProps}
          />
        </div>
      )}
    </FieldWrapper>
  );
}

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
  tone?: FieldTone;
};

export function TextAreaField({ name, label, tone, ...textareaProps }: TextAreaFieldProps) {
  return (
    <FieldWrapper name={name} label={label} tone={tone}>
      {(controlClassName) => (
        <textarea id={name} name={name} className={controlClassName} {...textareaProps} />
      )}
    </FieldWrapper>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  tone?: FieldTone;
};

export function SelectField({ name, label, tone, children, ...selectProps }: SelectFieldProps) {
  return (
    <FieldWrapper name={name} label={label} tone={tone}>
      {(controlClassName) => (
        <select id={name} name={name} className={controlClassName} {...selectProps}>
          {children}
        </select>
      )}
    </FieldWrapper>
  );
}
