import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import visspot_logo from './visspot_logo.svg'
import { useSpring, animated } from 'react-spring'

export const VisSpotLoading = ({ message, width }) => {
  const [toggle, settoggle] = useState(0)
  const [scale, setscale] = useState(1)
  const springProps = useSpring({ opacity: toggle, transform:`scale(${scale})` })
  useEffect(() => {
    const intervalId = setInterval(() => {
      settoggle((d) => {
        return d === 0 ? 1 : 0
      })

      setscale(d=>{
        return d === 1 ? 1.1 : 1
      })
    }, 700)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
   <div>
      <animated.div className={styles.loadingContainer} style={{ ...springProps }}>
        <img src={visspot_logo} width={`${width || '150px'}`} alt='Loading...' />
      </animated.div>
      <div className={styles.messageContainer}>{message}</div>
   </div>
  )
}
