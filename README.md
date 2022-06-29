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

  // Bind it to a component
  return <animated.div {...bind()} style={styles()} />
}
```

## License

MIT
