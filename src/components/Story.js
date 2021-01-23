import {StoryPart, Heading, SubHeading} from "Styles.js"; // I do have a problem here, and in line 8, should it be memory of memories ?

const Story = (props) => (
        <StoryPart>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/1.jpg" alt="" /></div>
                <div class="timeline-panel">
                    <Heading>
                        <h4>{props.memories.date}</h4>  
                        <SubHeading>{props.memories.title}</SubHeading>
                    </Heading>
                <div class="timeline-body"><p class="text-muted">{props.memories.story}</p></div>
            </div>
        </StoryPart>
);
export default Story;
