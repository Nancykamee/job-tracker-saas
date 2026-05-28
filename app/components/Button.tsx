type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
    type="button"
      onClick={onClick}
      className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}