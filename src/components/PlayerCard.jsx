import Col from 'react-bootstrap/Col';

const PlayerCard = ({name,statistics, img}) => {
  return (
    <div>
      <Col>{name}</Col>
    </div>
  )
}

export default PlayerCard
