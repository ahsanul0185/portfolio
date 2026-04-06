import React from 'react'
import Copy from './Copy'
import Eyebrow from './Eyebrow'

export default function Title({text, className}: {text: string, className?: string}) {
  return (
      <div className={`flex items-center justify-between border-b border-b-secondary-foreground/30 pb-8 mx-auto ${className}`}>
        <Eyebrow>
            {text}
        </Eyebrow>
    </div>
  )
}
