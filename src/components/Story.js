import {StoryPart, Heading, SubHeading} from "./Styles.js"; // I do have a problem here, and in line 8, should it be memory of memories ?

const Story = (props) => (
        <StoryPart>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/1.jpg" alt="" /></div>
                <div className="timeline-panel">
                    <Heading>
                        <h4>{props.memory.date}</h4>  
                        <SubHeading>{props.memory.title}</SubHeading>
                    </Heading>
                <div className="timeline-body"><p className="text-muted">{props.memory.story}</p></div>
            </div>
        </StoryPart>
);
export default Story;
