import React from 'react'
import CustomLink from '../../components/CustomLink/CustomLink'
import { app_store, play_store } from '../../constants/images'
import { footerdata } from './data'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="footer-col-1">
            <hr />
            <div className="sub_container">
                <section className="footerLink_container">
                    {
                        footerdata && footerdata.map(({title, data}) => (
                            <CustomLink title={title} data={data}/>
                        ))
                    }
                </section>
                <section className="footer_socialLinks">
                    <div>
                        <img src={app_store} alt="app_store logo"/>
                    </div>
                    <div>
                        <img src={play_store} alt="app_store logo"/>
                    </div>
                </section>
            </div>
            <hr />
        </div>
        <div className="footer-col-2">
            <p>© 2022 Sa'ge. All rights reserved.</p>
        </div>
        
    </footer>
  )
}

export default Footer