import {FunctionComponent, CSSProperties, PropsWithChildren} from 'react'
import './flexi-card.less'

type CSSURL = `url(${string})`

interface CardCSS extends CSSProperties
  { '--image'?: CSSURL
  ; '--background-color'?: string
  ; }

type Tag = Extract<keyof JSX.IntrinsicElements
  , 'div'
  | 'section'
  | 'a'
  | 'article'
  | 'header'
  | 'footer'
  >

interface FlexiCardProps extends PropsWithChildren
  { as?: Tag
  ; image?: string
  ; className?: string
  ; }

const bgImg = (c:CardCSS, s:string): CardCSS => (
  { ...c
  , '--image': `url(${s})`
  , })

export const FlexiCard:FunctionComponent<FlexiCardProps>
= ({as: As='div', image: image=null, children, className}) =>
  <As
    className={`flexiCard ${className||''} ${image?'':'flexiCard--simple'}`}
    style={image?bgImg({}, image):{}}
  >
    {children}
  </As>
