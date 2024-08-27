type IButtons = {
  label: string;
  onClick: () => void;
  buttonType: string;
  className?: string;
};

export default function Buttons({
  label,
  onClick,
  buttonType,
  className,
}: IButtons) {
  function getButtonColor() {
    switch (buttonType) {
      case "number":
        return "bg-[#505050]";
      case "operator":
      case "equal":
        return "bg-[#FF9500]";
      default:
        return "bg-[#D4D4D2] text-[#505050]";
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`active:scale-90 rounded-full size-[60px] text-white font-semibold text-2xl hover:brightness-125 hover:shadow-white hover:shadow-sm transition-all ${getButtonColor()} ${className}`}
    >
      {label}
    </button>
  );
}
