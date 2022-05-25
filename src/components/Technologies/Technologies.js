import React from 'react';
import { DiFirebase, DiCodeBadge, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
   <SectionDivider /><br /><br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range of technologies in the web desigining world. 
   </SectionText>
   <List>
     <ListItem>
       <DiCodeBadge size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           HTML, CSS, Javascript <br/> 
           and React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiWordpress size="3rem" />
       <ListContainer>
         <ListTitle>CMS</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Wordpress
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node and Database
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
