import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'
import { useState } from 'react'
import CountryCard from '../components/CountryCard';
import styles from '../styles/Components.module.scss'

export default function Home(){
  
  const [count, setCount] = useState({
    usa: 0,
    brasil: 0
  });
  const [openCountryCard, setOpenCountryCard] = useState(false);

  function openPopUp(id){
    const value=count[id]+1
    const x=id
    console.log(x)
    setOpenCountryCard(true)
    setCount({
      ...count,
      x:value
    })
  }

  return (
    <div>
      <div className={styles.text}>
        <h1>React Project</h1>
        <h3>The musician played {count.usa} times.</h3>
        <h3>The bird sang {count.brasil} times.</h3>
      </div>
      
        <div><CountryCard open={openCountryCard} onClose={() => setOpenCountryCard(false)} info='batata'/></div>
      
      
      <div className={styles.component}>
        <div className={styles.componentself}>
          <button><img src="/images/musician.png" alt="musician" id='usa' onClick={(e) => openPopUp(e.target.id)}/></button>
        </div>
        <div className={styles.componentself}>
          <button><img src="/images/bird.png" alt="bird" id='brasil' onClick={(e) => openPopUp(e.target.id)}/></button>
        </div>
      </div>
    </div>
  )
}
