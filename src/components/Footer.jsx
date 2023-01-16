import React from 'react'
import Style from './footer.module.css'

export default function Footer() {
  return (
    <div className={Style.container}>
      @
      <i class="fa fa-copyright" aria-hidden="true">
        Cristian Garcia
      </i>
    </div>
  )
}
