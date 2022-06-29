import { Component, createSignal } from 'solid-js';
import { createSpring, animated } from 'solid-spring'
import { useDrag } from 'solid-gesture'
import './App.css'

const App: Component = () => {
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
  return <animated.div class="box" {...bind()} style={styles()} />
}

export default App;
