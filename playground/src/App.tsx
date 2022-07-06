import { Component, createSignal } from 'solid-js';
import { createSpring, animated } from 'solid-spring'
import { useDrag } from 'solid-gesture'
import './App.css'

const App: Component = () => {
  const [coords, setCoords] = createSignal({
    x: 0,
    y: 0,
    scale: 1
  })

  const styles = createSpring(() => ({
    x: coords().x,
    y: coords().y ,
    scale: coords().scale
  }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ active, movement: [mx, my] }) => {
    setCoords({
      x: active ? mx : 0,
      y: active ? my : 0,
      scale: active ? 1.2 : 1
    })
  })

  // Bind it to a component
  return (
    <div class="flex fill center">
      <animated.div tabIndex={-1} class="drag" {...bind()} style={styles()} />
    </div>
  )
}

export default App;
