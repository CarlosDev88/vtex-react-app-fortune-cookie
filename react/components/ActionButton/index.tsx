import { ActionButtonProps } from 'types';
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = [
  'ctaButton'
] as const;

const ActionButton: React.FC<ActionButtonProps> = ({
  text = '¡Genera tu Fortuna Ahora!',
  onClick
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <button
      className={handles.ctaButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ActionButton;
