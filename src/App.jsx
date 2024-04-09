import { useState } from "react";

import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcepts";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data"
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);


  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept 
                key={concept.title} 
                {...concept} />  
            ))}
            
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]} 
            />
            <CoreConcept 
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onSelect={() => clickHandler("components")}>Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => clickHandler("jsx")}> JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => clickHandler("state")}>State</TabButton>  
          </menu>
          
          { !selectedTopic ? "Please select a topic." : null }
          { selectedTopic ? (
            <div>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          ) : null }
        </section>
      </main>
    </div>
  );
}

export default App;
