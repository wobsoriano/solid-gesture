# solid-gesture

[![npm (tag)](https://img.shields.io/npm/v/solid-gesture?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/solid-gesture) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/solid-gesture?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/solid-gesture?style=flat&colorA=000000&colorB=000000)

solid-gesture is a port of [@use-gesture/react](https://github.com/pmndrs/use-gesture) which lets you bind richer mouse and touch events to any component or view. With the data you receive, it becomes trivial to set up gestures, and often takes no more than a few lines of code.

You can use it stand-alone, but to make the most of it you should combine it with an animation library like [solid-spring](https://github.com/Aslemammad/solid-spring), though you can most certainly use any other.

## Installation

```bash
pnpm add solid-gesture
```

## Usage

```jsx
import { createSpring, animated } from 'solid-spring'
import { useDrag } from 'solid-gesture'

function PullRelease() {
  const [coords, setCoords] = createSignal({
    x: 0,
    y: 0
  })

  const styles = createSpring(() => ({
    x: coords().x,
    y: coords().y 
  }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    setCoords({ x: down ? mx : 0, y: down ? my : 0 })
  })

  // Bind it to a component
  return <animated.div {...bind()} style={styles()} />
}
```

### Simple example

<p align="middle">
  <a href="https://stackblitz.com/edit/vitejs-vite-uu2vit?file=src%2FApp.tsx"><img src="https://i.imgur.com/7myz7Tt.gif" width="400"/></a>
</p>

More examples soon...

## Primitives

solid-gesture exports several primitives that can handle different gestures.

| Primitive    | Description                                |
|--------------|--------------------------------------------|
| `useMove`    | Handles mouse move events                  |
| `useHover`   | Handles mouse enter and mouse leave events |
| `useScroll`  | Handles scroll events                      |
| `useWheel`   | Handles wheel events                       |
| `usePinch`   | Handles the pinch gesture                  |
| `useGesture` | Handles multiple gestures in one primitive |

With the exception of `useGesture` which is a special primitive, all other primitives share the same API:

```jsx
const bind = useDrag((state) => doSomethingWith(state), config)
return <div {...bind(arg)} />
```

- `state` is an object containing all attributes of the gesture, including the original event. That state is passed to your handler every time the gesture updates. You can find all state attributes in the [Gesture state section](https://use-gesture.netlify.app/docs/state/).
- `config` is an object containing options for the gesture. You can find all config options in the [Gesture options section](https://use-gesture.netlify.app/docs/options/).
- `arg` is a custom argument you can pass to the bind function. See this [example](https://codesandbox.io/s/github/pmndrs/use-gesture/tree/main/demo/src/sandboxes/draggable-list) to see where it can be useful.

## License

MIT
