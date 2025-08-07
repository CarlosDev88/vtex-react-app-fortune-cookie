import { useCssHandles } from 'vtex.css-handles'

import ActionButton from '../ActionButton'
import MessageArea from '../MessageArea'
import TextSection from '../TextSection'
import { useFortuneCookie } from '../../hooks/useFortuneCookie'
const CSS_HANDLES = ['fortuneCookieWrapper', 'container'] as const

const FortuneCookie: React.FC = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const { data, fetchFortuneCookies, loading, error } = useFortuneCookie()
  return (
    <main className={handles.fortuneCookieWrapper}>
      <div className={handles.container}>
        <div className="leftContent">
          {error && <p>Error: {error}</p>}

          <TextSection />
          <ActionButton onClick={fetchFortuneCookies} />
        </div>
        {loading ? (
          <p>Generando tu fortuna...</p>
        ) : data ? (
          <MessageArea message={data} />
        ) : (
          <></>
        )}
      </div>
    </main>
  )
}

export default FortuneCookie
