type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({
  label,
  type,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/40"
      />
    </div>
  );
}