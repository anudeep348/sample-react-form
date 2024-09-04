import { cn } from "../../lib/utils";
import { Label } from "../ui/label";

type InputProps = {
  labeltext: string;
  htmlfor?: string;
  radiolabel?: boolean;
  className?: string;
};
const InputLabel = ({
  labeltext,
  htmlfor,
  radiolabel,
  className,
}: InputProps) => {
  return radiolabel ? (
    <Label
      className={cn(
        "w-full block text-sm font-light tracking-wide p-3",
        className
      )}
      htmlFor={htmlfor}
    >
      {labeltext}
    </Label>
  ) : (
    <div className="mb-2">
      <Label
        className={cn(
          "text-sub-grey-2 font-normal tracking-wide text-sm",
          className
        )}
        htmlFor={htmlfor}
      >
        {labeltext}
        {"  "}
        <span className="-mt-3 text-base text-main-green-2">*</span>
      </Label>
    </div>
  );
};

export default InputLabel;
