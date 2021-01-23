import logo from './logo.svg';
import './App.css';
import Story from './components/Story';
import memories from './memories';

function App() {

        const memoryList = memories.map((memory) => (
    
            <Story key = {memory.id} memory = {memory}/>
        
        ));

  document.title = "My time line";
  return (
    <div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase">About</h2>
        <h3 class="section-subheading text-muted">My Coding Jurnney</h3>
    </div>
    <ul class="timeline">
        {memoryList}
        <li class="timeline-inverted">
            <div class="timeline-image">
                <h4>
                    Be Part
                    <br />
                    Of My
                    <br />
                    Story!
                </h4>
            </div>
        </li>
    </ul>
</div>
  );
}

export default App;
