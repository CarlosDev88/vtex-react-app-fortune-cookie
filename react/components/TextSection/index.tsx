import { TextSectionProps } from 'types';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'textContent',
  'mainTitle',
  'highlight'
] as const;

const TextSection: React.FC<TextSectionProps> = ({
  title = 'Tu',
  highlightText = 'Mensaje',
  subtitle = 'Revelado al Instante.'
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.textContent}>
      <h2 className={handles.mainTitle}>
        {title} <span className={handles.highlight}>{highlightText}</span>,<br />
        {subtitle}
      </h2>
    </div>
  );
};

export default TextSection;
