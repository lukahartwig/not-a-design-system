import { forwardRef } from "react";

type Props = React.ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <button ref={ref} {...props} />
));
