import type { DOMHandlers } from '@use-gesture/core/types'
import type { JSX } from 'solid-js'

type CombinedDOMHandlers = JSX.DOMAttributes<EventTarget> & DOMHandlers

export type SolidDOMAttributes = {
  [Key in keyof DOMHandlers]: CombinedDOMHandlers[Key]
}
