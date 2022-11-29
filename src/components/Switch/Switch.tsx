type Props = {
  isChecked: boolean;
  onToggle: () => void;
  labelOff: string;
  labelOn: string;
  id: string;
};

const Switch = ({ isChecked, onToggle, labelOff, labelOn, id }: Props) => {
  return (
    <div className="switch">
      <p>{labelOff}</p>
      <input id={id} type="checkbox" checked={isChecked} onChange={onToggle} />

      <label htmlFor={id}></label>
      <p>{labelOn}</p>
    </div>
  );
};

export default Switch;
