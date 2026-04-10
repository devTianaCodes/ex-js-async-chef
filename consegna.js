// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:

//     Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//     Estrarre la proprietà userId dalla ricetta
//     Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//     Restituire la data di nascita dello chef


async function getChefBirthday(id) {
    try {
      const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);

      if (!recipeResponse.ok) {
        throw new Error("Errore nel recupero della ricetta");
      }

      const recipe = await recipeResponse.json();
      const userId = recipe.userId;

      const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);

      if (!userResponse.ok) {
        throw new Error("Errore nel recupero dello chef");
      }

      const user = await userResponse.json();

      return user.birthDate;
    } catch (error) {
      throw error;
    }
  }

  getChefBirthday(45)
    .then((birthday) => console.log("Data di nascita dello chef:", birthday))
    .catch((error) => console.error("Errore:", error.message));