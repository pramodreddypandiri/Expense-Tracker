
import './App.css';
import Expense from './Home/components/expense';
import Header from './Home/components/header';
import Overview from './Home/components/overview';
function App() {
  return (
    <>
        <Header/>
        <div className='flex flex-row justify-between max-w-6xl mx-auto h-auto'>
            <Expense/>
            <Overview/>
        </div>
        
    </>
  );
}

export default App;
