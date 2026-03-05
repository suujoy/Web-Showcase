import React from 'react'
import "./dock.scss"

const Doc = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="/doc-icon/github.svg" alt="github" /></div>
        <div className="icon note"><img src="/doc-icon/note.svg" alt="note" /></div>
        <div className="icon pdf"><img src="/doc-icon/pdf.svg" alt="pdf" /></div>
        <div className="icon calender"><img src="/doc-icon/calender.svg" alt="calender" /></div>
        <div className="icon spotify"><img src="/doc-icon/spotify.svg" alt="spotify" /></div>
        <div className="icon mail"><img src="/doc-icon/mail.svg" alt="mail" /></div>
        <div className="icon link"><img src="/doc-icon/link.svg" alt="link" /></div>
        <div className="icon cli"><img src="/doc-icon/cli.svg" alt="cli" /></div>
    </footer>
  )
}

export default Doc
