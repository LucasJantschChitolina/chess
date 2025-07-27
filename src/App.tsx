import type { JSX } from 'react/jsx-runtime'
import { boardMatrix } from './lib/chess'

function showInitialBoard() {
  const board: JSX.Element[] = []

  for (let line = 0; line < 8; line++) {
    boardMatrix[line].map((value, index) => {
      board.push(<Square key={Math.random()} house={index + 1} line={line + 1} value={value} />)
    })
  }

  return board
}

function Square({ value, line, house }: { value: string, line: number, house: number }) {
  const isLightSquare = (line % 2 === 0 && house % 2 === 0) || (line % 2 !== 0 && house % 2 !== 0)

  return <div className={`border border-black w-full h-full flex flex-col items-center justify-center ${isLightSquare ? 'bg-white text-black' : 'bg-black text-white'}`}>{value}</div>
}

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className='grid grid-cols-8 border border-white w-[700px] h-[700px]'>
        {showInitialBoard()}
      </div>
    </div>
  )
}

export default App
