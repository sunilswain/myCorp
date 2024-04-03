import React from 'react'
import { apple, hosting, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={hosting}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Let Us Handle thes<br className='sm:block hidden'/>Technical Details.</h2>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient'>"Cost-Effective Hosting Solutions"</p>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        With our affordable hosting plans, we manage everything so you can focus on your business. Utilizing Azure, AWS, and Google Cloud, we ensure top-notch performance and reliability.
        </p>
      </div>  
    </section>
  )
}

export default Billing
