import ButtonColumn from './components/ButtonColumn';
import InputColumn from './components/InputColumn';
import MarkupColumn from './components/MarkupColumn';
import PreviewColumn from './components/PreviewColumn';
import './App.scss';
import './buttons.scss';
import { useEffect } from 'react';

function App() {
 useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      const el = document.getElementById('previewColumn');
      console.log(el);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, []);
  return (
    <div className="app">
      <a target="_blank" href='https://steamcommunity.com/sharedfiles/filedetails/?id=3662592009' className='help-button'>?</a>
      <ButtonColumn />
      <InputColumn />
      <MarkupColumn />
      <PreviewColumn></PreviewColumn>
    </div>
  )
}

export default App
