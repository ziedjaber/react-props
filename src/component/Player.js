import Card from 'react-bootstrap/Card';
const Player =({player:{name,team,nationality,jerseyNumber,age,imageURL}})=>{

    return(
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}<br/>
        Nationality:{nationality}<br/>
        JerseyNumber:{jerseyNumber}<br/>
        Age:{age}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
} 
export default Player ;