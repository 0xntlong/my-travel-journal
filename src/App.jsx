import Header from './components/Header'
import Entry from './components/Entry'
import data from './components/data'
import React from 'react'

export default function App() {
  const entryElement = data.map((entry) => {
    return (<Entry 
      id={entry.id} 
      {...entry}
      />
      // img={entry.img} 
      // title={entry.title} 
      // country={entry.country} 
      // googleMapLink={entry.googleMapLink} 
      // date={entry.date} 
      // text={entry.text}/>
  )})
  return (
    <>
      <Header />
      <main className="container">
        {entryElement}
      </main>
    </>
  );
}


// import Joke from './components/Joke'
// import jokesdata from './components/jokesdata'
// import React from 'react'

// export default function App() {

//   const jokes = jokesdata.map((joke) => {
//     return <Joke setup={joke.setup} punchline={joke.punchline}/>
//   })
//   return (
//     <main>
//       {jokes}
//     </main>
//   )
// }