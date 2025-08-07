import { MessageAreaProps } from '../../types'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'imageSection',
  'fortuneMessageContainer',
  'fortuneMessagePaper',
  'fortuneText',
  'luckyNumberText',
  'cookieImage',
] as const

const MessageArea: React.FC<MessageAreaProps> = ({
  message = {
    message: 'Tu Mensaje Aquí',
    number: 'XX-XX-XXXX',
  },
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.imageSection}>
      <div className={handles.fortuneMessageContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          alt="Galleta de la fortuna"
          className={handles.cookieImage}
        />
        <div className={handles.fortuneMessagePaper}>
          <h3 className={handles.fortuneText}>{message.message}</h3>
          <h5 className={handles.luckyNumberText}>
            Número de la suerte: {message.number}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default MessageArea
