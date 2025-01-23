import { Link } from "react-router";


export default function PetsList({pets}) {
    async function addOwner() {
        //? info from bruno -> URL
        const url = "https://api.airtable.com/v0/app1MaeHJEtHqHwMD/Table%201?maxRecords=3&view=Grid%20view";
        //? info from bruno Body
        const data = {
          fields: {
            "id": "00bb",
            "Owner": "new owner3"
          },
        };
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer patm0KrHkiZZj4ROz.eba9be3d51e41f7f25618297276ae013c04f803875b3c02e03366e80c45cee54",
            },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }
    function handleClick() {
        console.log('click');
        addOwner();
    }


    return (
        <>
        <p>all the pets showed here</p>
        <button onClick={handleClick}>click</button>
        {pets.map((item)=>(
            <div className='petslist' key={item.id}>
                <p>Name: <Link to={`/pets/${item.id}`}>{item.name}</Link></p>
            </div>
        ))}
        <button><Link to='/pets/new'>Create new pet!</Link></button>
        </>
    )
}