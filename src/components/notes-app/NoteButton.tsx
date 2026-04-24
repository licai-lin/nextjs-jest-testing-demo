import { ButtonHTMLAttributes, ReactNode } from "react";
import BaseButton from "./BaseButton";

type NoteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function NoteButton({
  children,
  className,
  ...props
}: NoteButtonProps) {
  return (
    <BaseButton className={className} {...props}>
      {children}
    </BaseButton>
  );
}
