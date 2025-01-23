import { useParams } from "react-router";
import { Link } from "react-router";

export default function PetDetail(props) {
    console.log(props)
    const { petsID } = useParams()
    console.log('petsID: ',petsID);
    
    const singlePet = props.pets.find(
        (item) => item.id === petsID
      );
      console.log('singlePet: ',singlePet);
    return (
        <>
        <p>name: {singlePet.name}</p>
        <p>breed: {singlePet.breed}</p>
        <p>age: {singlePet.age}</p>
        <button><Link path='/'>edit details</Link></button>
        <button><Link>delete this pet</Link></button>
        </>
    )
}