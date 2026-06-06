import reactImg from "./assets/react-core-concepts.png";
function getRandomNum(max){
return Math.floor(Math.random() * (max + 1))
}
const description = ["Fundamental","concept","crucial"]
function Header() {
  const desc = description[getRandomNum(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
