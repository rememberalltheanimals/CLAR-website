import logo from './logo.svg';
import './App.css';

function Header(props) {
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a hreaf={'/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:'Mock Internship', body:'Internship through the freelancer platforms'},
    {id:2, title:'Makers in Residency', body:'Engagement with the public through software development'},
    {id:3, title:'Mock Company', body:'A mock company for the NCEET demographic'}

  ]
  return (
    <div>
      <Header title="Code Like A River" onChangeMode={function(){
        alert('River makes its way.');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome!" body="We create opportunies by ourselves."></Article>
    </div>
  );
}

export default App;
