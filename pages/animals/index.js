import React from 'react'
import Link from 'next/link'
import MyNavbar from '../../components/MyNavbar';

import { ListGroup, ListGroupItem, Col, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

import api from '../../axiosStore'

const Animals = () => {
  const [animals, setAnimals] = React.useState(null)

  const fetchAnimals = (limit) => {
    const query = limit ? `?limit=${limit}` : ''
    api.get(`/animals/${query}`).then((response) => {
			setAnimals(response.data)
		})
  }

  const renderAnimals = () => {
    return (
      <ListGroup>
        {animals.map((animal) => {
          return (
            <Link key={animal.id} href={`/animals/${animal.id}`}>
              <ListGroupItem styles={{cursor: 'pointer'}}>{animal.id}. {animal.name}</ListGroupItem>
            </Link>
          )
        })}
      </ListGroup>
    )
  }

  React.useEffect(() => {
    fetchAnimals()
  }, [])

  return (
    <>
      <MyNavbar />

      <h1>Our Residents</h1>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          {[15, 25, 50, 100].map(limit => (
            <Button
              key={limit}
              onClick={() => {fetchAnimals(limit)}}
              >{limit}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
      {!animals 
        ? <p>Loading...</p> 
        : renderAnimals()
      }
    </>
    )
}

export default Animals