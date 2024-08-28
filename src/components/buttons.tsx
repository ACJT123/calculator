import { ActionTypes } from "../types/basic-calculator";

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
  const buttonColor =
    buttonType === ActionTypes.NUMBER
      ? "bg-[#505050]"
      : buttonType === ActionTypes.OPERATOR || buttonType === ActionTypes.EQUAL
      ? "bg-[#FF9500]"
      : "bg-[#D4D4D2] text-[#505050]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`active:scale-90 rounded-full size-[60px] text-white font-semibold text-2xl hover:brightness-125 hover:shadow-white hover:shadow-sm transition-all ${buttonColor} ${className}`}
    >
      {label}
    </button>
  );
}
