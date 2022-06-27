import { Controller } from '@use-gesture/core'
import type {
  GenericOptions,
  GestureKey,
  InternalHandlers,
  NativeHandlers,
} from '@use-gesture/core/types'
import type { SolidDOMAttributes} from './types'
import { onCleanup, onMount } from 'solid-js'

type HookReturnType<Config extends GenericOptions> = Config['target'] extends object
  ? void
  // eslint-disable-next-line no-unused-vars
  : (...args: any[]) => SolidDOMAttributes

/**
 * Utility hook called by all gesture hooks and that will be responsible for
 * the internals.
 *
 * @param {InternalHandlers} handlers
 * @param {GenericOptions} config
 * @param {GestureKey} gestureKey
 * @param {NativeHandler} nativeHandlers
 * @returns nothing when config.target is set, a binding function when not.
 */
export function useRecognizers<Config extends GenericOptions>(
  handlers: InternalHandlers,
  config: Config | {} = {},
  gestureKey?: GestureKey,
  nativeHandlers?: NativeHandlers,
): HookReturnType<Config> {
  const ctrl = new Controller(handlers)
  ctrl.applyHandlers(handlers, nativeHandlers)
  ctrl.applyConfig(config, gestureKey)

  onMount(() => {
    ctrl.effect.bind(ctrl)
    
    const cleanUp = ctrl.clean.bind(ctrl)
    onCleanup(cleanUp)
  })

  // When target is undefined we return the bind function of the controller which
  // returns prop handlers
  // @ts-ignore
  if (config.target === undefined)
    return ctrl.bind.bind(ctrl) as any

  return undefined as any
}
