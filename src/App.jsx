import ButtonColumn from './components/ButtonColumn';
import InputColumn from './components/InputColumn';
import MarkupColumn from './components/MarkupColumn';
import PreviewColumn from './components/PreviewColumn';
import './App.scss';
import './buttons.scss';

function App() {
  return (
    <div className="app">
      <a target="_blank" href='https://steamcommunity.com/sharedfiles/filedetails/?id=3662682549' className='help-button'>?</a>
      <ButtonColumn />
      <InputColumn />
      <MarkupColumn />
      <PreviewColumn></PreviewColumn>
    </div>
  )
}

export default App
