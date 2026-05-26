type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps) {
  return (
    <button
      className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}