export type buttonProps = {
  label: string;
  type: "value" | "operator"
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export type screenProps = {
  displayString: String;
}

