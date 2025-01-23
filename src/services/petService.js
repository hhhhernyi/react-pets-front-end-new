const BASE_URL = "http://localhost:3000/pets";

async function getPets() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch pets.");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

getPets();

export { getPets };