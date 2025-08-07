
import ActionButton from 'components/ActionButton';
import MessageArea from 'components/MessageArea';
import TextSection from 'components/TextSection';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'fortuneCookieWrapper',
  'container'
] as const;

const FortuneCookie: React.FC = () => {
  const handles = useCssHandles(CSS_HANDLES);

  const handleGenerateFortune = () => {
    console.log('Generate fortune clicked!');
    // Funcionalidad después
  };

  return (
    <main className={handles.fortuneCookieWrapper}>
      <div className={handles.container}>
        <TextSection />
        <ActionButton onClick={handleGenerateFortune} />
        <MessageArea />
      </div>
    </main>
  );
};

export default FortuneCookie;
