import { pinchAction, registerAction } from '@use-gesture/core/actions'
import type { EventTypes, Handler, UserPinchConfig } from '@use-gesture/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Pinch primitive.
 *
 * @param {Handler<'pinch'>} handler - the function fired every time the pinch gesture updates
 * @param {UserPinchConfig} config - the config object including generic options and pinch options
 */
export function usePinch<EventType = EventTypes['pinch'], Config extends UserPinchConfig = UserPinchConfig>(
  handler: Handler<'pinch', EventType>,
  config?: Config,
) {
  registerAction(pinchAction)
  return useRecognizers({ pinch: handler }, config || {}, 'pinch')
}
