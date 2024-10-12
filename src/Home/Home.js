import './Home.css';

function Home() {
    return (
        <div className="main">
            <div id='desc'>
                <div id='desc-in'>
                    <h1 id='h1'>Hi, my name is Lakshan Jayathilake</h1>
                    <p id='para'>Expert at software developing. Explore my projects, skills, and get in touch!</p>
                    <hr id='home-hr'></hr>
                    <button id='explore' onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>Explore more</button>
                </div>
            </div>


        </div>
    );
}

export default Home;