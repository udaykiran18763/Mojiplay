// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {itemDetails, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = itemDetails
  const shuffleList = () => {
    shuffledEmojisList(id)
  }

  return (
    <li className="list-card">
      <button type="button" className="list-button">
        <img src={emojiUrl} alt={emojiName} onClick={shuffleList} />
      </button>
    </li>
  )
}

export default EmojiCard
