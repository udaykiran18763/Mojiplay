// Write your code here.
import './index.css'

const LoseCard = props => {
  const {score, again} = props
  const selectAgain = () => {
    again()
  }

  return (
    <div className="container">
      <div className="score">
        <h1 className="heading">You Lose</h1>
        <p>Score </p>
        <p className="font">{score}/12</p>
        <button type="button" className="again-button" onClick={selectAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

const WinCard = props => {
  const {score, again} = props
  const selectAgain = () => {
    again()
  }
  return (
    <div className="container">
      <div className="score">
        <h1 className="heading">You Won</h1>
        <p>Best Score </p>
        <p className="font"> {score}/12</p>
        <button type="button" className="again-button" onClick={selectAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

const WinOrLoseCard = props => {
  const {score, again} = props
  const winLoseAgain = () => {
    again()
  }
  return score === 12 ? (
    <WinCard score={score} again={winLoseAgain} />
  ) : (
    <LoseCard score={score} again={winLoseAgain} />
  )
}

export default WinOrLoseCard
