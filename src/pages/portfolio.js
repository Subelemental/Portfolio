import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Showcasing my work and projects." />
      </Head>
      <main>
        <div className="wrapperProjects">
          <h1 className='projectsTitle'>João Vale's Projects</h1>
          <div className='intro'> 
            <h1 className='pageTitle'>Hey, my name is João Vale. I'm a Frontend Developer focusing on his new career while still fulfilling his dream of travelling to new places!</h1>
            <img src="/images/joaoValeTravel.jpg" className='heroImage' alt="João Vale" /></div>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
            <h1 className='projectsTitleList'>List of Projects</h1>
            <div className="portfolioBackground">
              <div className="project-card">
              <h3 className='project-title'>Alraqmiya</h3>
              <a href="https://www.alraqmiya.com/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/alraq.jpg' alt='Alraqmiya' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>Navi</h3>
              <a href="https://navi.pt/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/navi.jpg' alt='Navi' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>Planta-la</h3>
              <a href="https://www.planta-la.com/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/planta.jpg' alt='Planta-la' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>Solvian</h3>
              <a href="https://www.solvian.pt/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/solvian.jpg' alt='Solvian' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>Tasco'Tau</h3>
              <a href="https://www.tas-cotau.pt/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/tasco.jpg' alt='TascoTau' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>Coach Zach Chu</h3>
              <a href="https://coachzachchu.com/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/coach.jpg' alt='Coach Zach Chu' />
              </a>
            </div>
            <div className="project-card">
              <h3 className='project-title'>NanderFlower Invaders</h3>
              <a href="https://github.com/guilhermeSilva96/AlienInvaders" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/chooseYourPlayer.jpg' alt='NanderFlower Invaders' />
              </a> 
            </div>
            <div className="project-card">
              <h3 className='project-title'>RitualBeast Tracker</h3>
              <a href="https://subelemental.github.io/rb/" className='image' target="_blank" rel="noopener noreferrer">
                <img src='/images/RB.jpg' alt='RitualBeast Tracker' />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
