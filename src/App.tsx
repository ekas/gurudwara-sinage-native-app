import "./App.css";
import CalendarApp from "./components/CalendarApp";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/Khanda.svg" className="khanda" alt="" />
        <div className="gurudwara-info">
          <h1>ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ ਈ.ਵੀ.</h1>
          <h3>ਗ੍ਰੈਂਡਵੇਗ 97, 22529 ਹੈਮਬਰਗ</h3>
        </div>
        <img src="/Khanda.svg" className="khanda" alt="" />
      </header>
      <CalendarApp />
    </div>
  );
}

export default App;
