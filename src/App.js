import './App.css';

function App() {
  return (
    <div className="App">
      <header className='topo'>
        <p>React JS</p>
      </header>
      <main className='principail'>
        <section>
          <h2>React JS</h2>
          <h3>JavaScript library for creating SPAs</h3>
          <a href='https://reactjs.org/' target='_blank'>Official site</a>
        </section>
        <section>
          <h2 className='h2'>Requirements</h2>
          <p>See below the minimum requirements to learn React JS:</p>
          <div className='card'>
            <div>
              <h5>HTML</h5>
              <p>
                Learn to structure page elements with HTML
              </p>
            </div>
            <div>
              <h5>CSS</h5>
              <p>
                Learn to style page elements with CSS
              </p>
            </div>
            <div>
              <h5>JavaScript</h5>
              <p>
                Learn the language used by React JS, JavaScript
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p>Curso de introdução de React JS</p>
      </footer>
    </div>
  );
}

export default App;
