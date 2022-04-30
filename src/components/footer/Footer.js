import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer-container'>
      <div className='leftFooter'>
        <p className='footerDate'>
          &copy; {new Date().getFullYear()} 79Chops All rights reserved | Terms
          of service | Privacy rights
        </p>
      </div>
      <div className='rightFooter'>
        <div className='rightFooter1'>
          <h4 className='contactH4'>CONTACT</h4>
          <ul className='contactUl'>
            <li className='contactLi'>342-420-6969 </li>
            <li className='contactLi'>Abuja, Nigeria</li>
            <li className='contactLi'>
              React Js Street, sidehustle capston 79
            </li>
          </ul>
        </div>
        <div className='rightFooter2'>
          <h4 className='contactH4'>SOCIAL MEDIA</h4>
          <ul className='contactUl'>
            <li className='contactLiSocial'>Instagram</li>
            <li className='contactLiSocial'>Telegram</li>
            <li className='contactLiSocial'>Twitter</li>
            <li className='contactLiSocial'>Facebook</li>
          </ul>
        </div>
        <div className='rightFooter3'>
          <h4 className='contactH4'>TEAM DEVELOPERS</h4>
          <ul className='contactUl'>
            <li className='contactLi'>David Okani</li>
            <li className='contactLi'>Jamiu Ismail</li>
            <li className='contactLi'>Oluwatomilola Faith</li>
            <li className='contactLi'>Jumoke .N</li>
            <li className='contactLi'>Seun David</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default footer
