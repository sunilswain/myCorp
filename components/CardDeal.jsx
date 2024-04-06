import React from 'react'
import { support } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Your Partner Beyond Launch<br className='sm:block hidden'/></h2>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient'>"24/7 Post-Deployment Tech Support"</p>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Experience uninterrupted assistance post-project launch.<br/>Our 24/7 tech support ensures smooth operations, troubleshooting, and guidance whenever you need it, keeping your business running seamlessly
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={support}
          alt='support'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
