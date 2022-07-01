import { useState, useEffect } from 'react';
import './App.css';
import star from './assets/star.svg'
import wiew from './assets/wiew.svg'
import sumka from './assets/sumka.svg'
import lock from './assets/lock.svg'

function App() {

  const [jobsApi, jobsTxt] = useState([])
  // console.log(jobsApi);

  useEffect(function() {
    fetch('https://www.arbeitnow.com/api/job-board-api')
      .then(response => response.json())
      .then(data => jobsTxt(data.data))
  }, [])

  return (
    <div className="App">
      {jobsApi.map(todo => 
      <div className='jobs-cnt-1'>    
        <div className='jobs-cnt'>
          <div className='jobs-txt'>
            <div className='jobs'>
              <img src={star} alt='' />
              <p>{todo.title}</p>
            </div>
            <div className='jobs'>
              <img src={sumka} alt='' />
              <p>{todo.company_name}</p>
            </div>
            <div className='jobs'>
              <img src={lock} alt='' />
              <p>{todo.location}</p>
            </div>
          </div>
          <div className='title'>
            <div className='title-flex'>
              <b>Job Type:</b>
            <p className='p-blue'>{todo.job_types[0]}</p>
            <p className='p-blue'>{todo.job_types[0] + "/" + todo.job_types[1]}</p>
            </div>
            <div className='title-flex'>
            <b>Tags:____</b>
            <p className='p-bluve'>{todo.tags[0]}</p>
            <p className='p-bluve'>{todo.tags[1] +"/"+ todo.tags[1]}</p>
            </div>
            <div className='title-flex'>
            <b>Date:____</b>
            <b className='p-gren'>{todo.created_at}</b>
            </div>
          </div>
          <div className='btn-icon'>
              <a href="https://www.arbeitnow.com/view/data-architect-music-tribe-willich-north-rhine-westphalia-germany-120142" className='blue-btn top'><img src={wiew} alt='' />wiew</a>
              <a href='https://www.arbeitnow.com/view/data-architect-music-tribe-willich-north-rhine-westphalia-germany-120142' className='blue-btn box-1'><img src={wiew} alt='' />apply</a>
          </div>
        </div>
        <details class="description">
          <summary className='blue-btn box-2'>More</summary>
          <h1>description:</h1>
          <div className='description' dangerouslySetInnerHTML={{ __html: todo.description}}/>
        </details>
      </div>
      )}
    </div>
  );
}

export default App;