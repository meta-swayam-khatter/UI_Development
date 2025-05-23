import './App.css'

function App() {
  const date = new Date();
  const indianTimeFormatter = new Intl.DateTimeFormat('en-IN', {
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata'
  });

  const formattedTime = indianTimeFormatter.format(date);
  return (
    <>
      <div>{formattedTime}</div>
    </>
  )
}

export default App
