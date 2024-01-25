import Avatar from './Images/Avatar.jpg';

function About() {
    return (
        <div id='about'>
            <div className='avatar-border'>
                <img src={Avatar} className='avatar'/>
            </div>
            <div className='intro-text'>
                <h2>Hey! I'm</h2>
                <h1>Farah</h1>
            </div>
        </div>
    );
}

export default About;