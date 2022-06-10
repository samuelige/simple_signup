import React from 'react'
import './Title.scss'

type TitleTypes = {
    title: string;
    isSubTitle: boolean;
    subtitle: string;
}

const Title = ({title, isSubTitle, subtitle}: TitleTypes) => {
  return (
    <div className="title_container">
        <h1>{title}</h1>
        {isSubTitle && <p>{subtitle}</p>}
    </div>
  )
}

export default Title