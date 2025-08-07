
import { MessageAreaProps } from 'types';
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = [
  'imageSection',
  'fortuneCookieDisplay',
  'fortuneMessagePaper',
  'fortuneText',
  'luckyNumberText',
  'glowOverlay'
] as const;

const MessageArea: React.FC<MessageAreaProps> = ({
  message = {
    text: 'Tu Mensaje Aquí',
    luckyNumber: 'XX-XX-XXXX'
  }
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={handles.imageSection}>
      <div className={handles.fortuneCookieDisplay}>
        <div className={handles.fortuneMessagePaper}>
          <h3 className={handles.fortuneText}>{message.text}</h3>
          <h5 className={handles.luckyNumberText}>
            Número de la suerte: {message.luckyNumber}
          </h5>
        </div>
      </div>
      <div className={handles.glowOverlay}></div>
    </div>
  );
};

export default MessageArea;
