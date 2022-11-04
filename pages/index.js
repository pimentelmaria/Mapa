import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'
import { useState } from 'react'
import CountryCard from '../components/CountryCard';
import styles from '../styles/Components.module.scss'

export default function Home(){
  
  const [numMusician, setNumMusician] = useState(0);
  const [numBird, setNumBird] = useState(0);
  const [openCountryCard, setOpenCountryCard] = useState(false);


  function musicianClick() {
    setNumMusician(prevNum => prevNum + 1)
  }

  function birdClick() {
    setNumBird(prevNum => prevNum + 1)
    setOpenCountryCard(true)
  }

  return (
    <div>
      <div className={styles.text}>
        <h1>React Project</h1>
        <h3>The musician played {numMusician} times.</h3>
        <h3>The bird sang {numBird} times.</h3>
      </div>
      
        <div><CountryCard open={openCountryCard} onClose={() => setOpenCountryCard(false)}/></div>
      
      
      <div className={styles.component}>
        <div className={styles.componentself}>
          <button><img src="/images/musician.png" alt="musician" onClick={musicianClick}/></button>
        </div>
        <div className={styles.componentself}>
          <button><img src="/images/bird.png" alt="bird" onClick={birdClick}/></button>
        </div>
      </div>
    </div>
  )
}
