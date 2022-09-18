/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

let selectedEmojis = []

class EmojiGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    list: '',
    status: true,
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    const {score} = this.state
    let gameStatus
    let updatedScore
    const index = emojisList.findIndex(eachItem => eachItem.id === id)
    console.log(index)
    const emojiItem = emojisList[index]
    if (selectedEmojis.includes(emojiItem) && score <= 11) {
      gameStatus = false
      updatedScore = score
    } else {
      selectedEmojis = [...selectedEmojis, emojiItem]
      gameStatus = true
      updatedScore = score + 1
    }
    console.log(selectedEmojis)
    this.setState({list: shuffledList, score: updatedScore, status: gameStatus})
  }

  playAgain = () => {
    const {score, highScore} = this.state
    let updatedHighScore
    if (score > highScore) {
      updatedHighScore = score
    } else {
      updatedHighScore = highScore
    }
    selectedEmojis = []
    this.setState({
      score: 0,
      highScore: updatedHighScore,
      list: '',
      status: true,
    })
  }

  render() {
    const {score, highScore, status} = this.state
    let {list} = this.state
    const {emojisList} = this.props
    list = emojisList
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={highScore} gameStatus={status} />
        {status ? (
          <div className="emoji-container">
            <ul className="list-container">
              {list.map(eachItem => (
                <EmojiCard
                  itemDetails={eachItem}
                  key={eachItem.id}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <WinOrLoseCard score={score} again={this.playAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
