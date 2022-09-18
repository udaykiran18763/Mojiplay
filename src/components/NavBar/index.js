// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props
  const scoreDisplay = gameStatus ? '' : 'invis'
  return (
    <div className="nav-bar-bg">
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={`score-card ${scoreDisplay}`}>
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
