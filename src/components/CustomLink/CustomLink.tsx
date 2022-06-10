import React from 'react'
import './CustomLink.scss'

type Props = {
    title: string;
    data: string[]
}

const CustomLink = ({title, data}: Props) => {
  return (
    <div className='custom_link'>
        <h1>{title}</h1>
        <ul className="links_container">
            {
                data && data.map((item) => (
                    <li><a href="##">{item}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default CustomLink