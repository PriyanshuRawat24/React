
import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")
  
  return (
  <div class="w-full h-screen duration-300"
  style={{backgroundColor: color}}
  >
    <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setcolor("red")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "red"}}>
          red
        </button>
        <button 
        onClick={() => setcolor("green")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "green"}}>
          green
        </button>
        <button 
        onClick={() => setcolor("blue")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "blue"}}>
          blue
        </button>
        <button 
        onClick={() => setcolor("purple")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "purple"}}>
          purple
        </button>
        <button 
        onClick={() => setcolor("brown")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "brown"}}>
          brown
        </button>
        <button 
        onClick={() => setcolor("pink")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "pink"}}>
          pink
        </button>
        <button 
        onClick={() => setcolor("teal")}
        class="outline-none px-4 py-1 rounded-full text-white shadow-lg uppercase"
         style={{backgroundColor: "teal"}}>
          teal
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
