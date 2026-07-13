interface MultiSelectFieldProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  columns?: 1 | 2 | 3;
  hasOther?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}

const gridColsClass: Record<1 | 2 | 3, string> = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export default function MultiSelectField({
  label,
  options,
  selected,
  onToggle,
  columns = 2,
  hasOther = false,
  otherValue = "",
  onOtherChange,
  error = false,
  errorMessage = "Select at least one option.",
}: MultiSelectFieldProps) {
  return (
    <fieldset className="flex flex-col gap-2 sm:col-span-2">
      <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 mb-2">
        {label}
      </legend>
      <div
        className={`grid grid-cols-1 ${gridColsClass[columns]} gap-x-6 gap-y-3 border px-4 py-4 ${
          error ? "border-red-500" : "border-black/20"
        }`}
      >
        {options.map((option) => (
          <label
            key={option}
            className="flex items-start gap-2 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="mt-0.5 accent-black"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {hasOther && selected.includes("Other") && (
        <input
          type="text"
          value={otherValue}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder="Please specify"
          className="mt-1 border border-black/20 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
      )}
      {error && <p className="text-xs text-red-600">{errorMessage}</p>}
    </fieldset>
  );
}
