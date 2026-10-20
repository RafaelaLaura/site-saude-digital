import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { ChevronDown, Search, X } from "lucide-react";

const CONTROL_BOX = "flex h-12 items-center px-5 transition-colors focus-within:bg-secondary/40";

export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div
      role="search"
      className="mb-6 flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:flex-row sm:divide-x sm:divide-y-0"
    >
      {children}
    </div>
  );
}

type SearchFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
};

export function SearchField({
  name,
  label,
  value,
  onValueChange,
  ...inputProps
}: SearchFieldProps) {
  return (
    <div className={`${CONTROL_BOX} flex-1 gap-3`}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <Search aria-hidden className="size-5 shrink-0 text-accent" />
      <input
        id={name}
        name={name}
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        className="text-body-lg h-full min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        {...inputProps}
      />
      {value && (
        <button
          type="button"
          onClick={() => onValueChange("")}
          aria-label="Limpar busca"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-primary"
        >
          <X aria-hidden className="size-4" />
        </button>
      )}
    </div>
  );
}

type FilterSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
};

export function FilterSelect({ name, label, children, ...selectProps }: FilterSelectProps) {
  return (
    <div className={`${CONTROL_BOX} relative gap-2 sm:w-56`}>
      <label htmlFor={name} className="text-body-sm shrink-0 text-muted-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="text-body-sm h-full min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pr-6 font-medium text-primary outline-none"
        {...selectProps}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        strokeWidth={1.75}
        className="pointer-events-none absolute right-5 size-3.5 text-muted-foreground"
      />
    </div>
  );
}

type FilterChipsProps<T extends string> = {
  label: string;
  options: { value: T | ""; label: string }[];
  value: T | "";
  onChange: (value: T | "") => void;
};

export function FilterChips<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className="mb-6 flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(option.value)}
            className={`text-body-sm inline-flex h-9 items-center rounded-full border px-4 transition-colors ${
              isSelected
                ? "border-primary bg-primary font-medium text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
