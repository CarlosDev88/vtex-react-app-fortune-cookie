export interface FortuneMessage {
  text: string;
  luckyNumber: string;
}

export interface TextSectionProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
}

export interface ActionButtonProps {
  text?: string;
  onClick?: () => void;
}

export interface MessageAreaProps {
  message?: FortuneMessage;
}
