import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

import { EXAMPLES } from "../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);
        
    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }
     
    let tabContent = <p>Please select a topic.</p> 

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );    
    }
       
    return (
        <Section 
            id="examples"
            title="Examples">
          <Tabs
            buttonsContainer="menu"
            buttons={
                <>
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
                </>
            }
          >
            {tabContent}  
          </Tabs>
        </Section>
    )
}