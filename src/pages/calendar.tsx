import Image from "next/image";
import Calendar from "../components/calendar";

function App() {
  return (
    <div className="m-0">
      <header className="flex py-3 px-2 mb-1 items-center bg-amber-600 justify-between">
        <Image
          src="/Khanda.svg"
          className="khanda"
          alt=""
          width={80}
          height={80}
        />
        <div className="flex flex-col items-center justify-center tracking-wide font-bold text-3xl">
          <p>ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ ਈ.ਵੀ.</p>
          <p>ਗ੍ਰੈਂਡਵੇਗ 97, 22529 ਹੈਮਬਰਗ</p>
        </div>
        <Image
          src="/Khanda.svg"
          className="khanda"
          alt=""
          width={80}
          height={80}
        />
      </header>
      <div className="p-1">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
