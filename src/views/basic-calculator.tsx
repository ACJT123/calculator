import Buttons from "../components/buttons";

export default function BasicCalculator() {
  return (
    <div>
      <form className="shadow-white/10 shadow-lg p-8">
        <div>
          <input
            type="number"
            className="bg-transparent w-full text-right mb-4 text-3xl text-[#D4D4D2]"
            defaultValue={0}
          />
        </div>

        <div className="grid grid-cols-4 place-items-center gap-4">
          <Buttons label="C" buttonType="clear" onClick={() => {}} />
          <Buttons label="+/-" buttonType="negative" onClick={() => {}} />
          <Buttons label="%" buttonType="percentage" onClick={() => {}} />
          <Buttons label="/" buttonType="operator" onClick={() => {}} />

          <Buttons label="7" buttonType="number" onClick={() => {}} />
          <Buttons label="8" buttonType="number" onClick={() => {}} />
          <Buttons label="9" buttonType="number" onClick={() => {}} />
          <Buttons label="X" buttonType="operator" onClick={() => {}} />

          <Buttons label="4" buttonType="number" onClick={() => {}} />
          <Buttons label="5" buttonType="number" onClick={() => {}} />
          <Buttons label="6" buttonType="number" onClick={() => {}} />
          <Buttons label="-" buttonType="operator" onClick={() => {}} />

          <Buttons label="1" buttonType="number" onClick={() => {}} />
          <Buttons label="2" buttonType="number" onClick={() => {}} />
          <Buttons label="3" buttonType="number" onClick={() => {}} />
          <Buttons label="+" buttonType="operator" onClick={() => {}} />

          <Buttons
            label="0"
            buttonType="number"
            className="col-span-2 w-full"
            onClick={() => {}}
          />
          <Buttons label="." buttonType="number" onClick={() => {}} />
          <Buttons label="=" buttonType="equal" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}
