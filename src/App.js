import './App.css';
import star from './assets/star.svg'

function App() {
  // const jobsApi = fetch(`https://www.arbeitnow.com/api/job-board-api`)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  return (
    <div className="App">
      <div className='jobs-cnt'>
          <div className='jobs-txt-flex'>
            <div className='jobs-txt'>
              <div className='jobs'>
                <img src={star} alt='' />
                <p>Mulesoft Developer</p>
              </div>
              <div className='jobs'>
                <img src={star} alt='' />
                <p>Mulesoft Developer</p>
              </div>
              <div className='jobs'>
                <img src={star} alt='' />
                <p>Mulesoft Developer</p>
              </div>
            </div>
            <div className='title'>
              <div className='title-flex'>
              <b>Job Type:</b>
              <p className='p-blue'>remote</p>
              <p className='p-blue'>full-time</p>
              </div>
              <div className='title-flex'>
              <b>Tags:____</b>
              <p className='p-bluve'>remote</p>
              <p className='p-bluve'>full-time</p>
              </div>
              <div className='title-flex'>
              <b>Date:____</b>
              <b className='p-gren'>12342343</b>
              </div>
            </div>
          </div>
          <div className='btn-icon'>
            <a href=''><img src="" alt='' /></a>
            <a href=''><img src="" alt='' /></a>
            <a href=''><img src="" alt='' /></a>
          </div>
          <div className='description'>

          </div>
      </div>
    </div>
  );
}

export default App;