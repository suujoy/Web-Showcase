import React from 'react'
import WindowsWindow from './WindowsWindow'
import "./resume.scss"

const Resume = () => {
  return (
    <WindowsWindow>
         <div className="resume-window">
            <embed src="/resume.pdf" frameborder="0"></embed>
         </div>
    </WindowsWindow>
  )
}

export default Resume
