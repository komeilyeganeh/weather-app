import Card from './components/Card/Card';
import Form from './components/Form/Form';

function App() {
  return (
    <div style={{minHeight: "100vh", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"  }}>
      <h1 style={{color: "#F0A500"}}>Weather App</h1>
      <Form />
      <Card />
      {/* <div style={{padding: "1rem 2rem", color: "#000", backgroundColor: "#fff", borderRadius: "15px"}}>
        <p>There is no such location</p>
      </div> */}
    </div>
  );
}

export default App;
