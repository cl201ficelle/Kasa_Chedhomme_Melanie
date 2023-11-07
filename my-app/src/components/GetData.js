
export async function GetLogementsList() {
    try {
      const reponse = await fetch("/logements.json");
      if (reponse.ok) {
        const data = await reponse.json();
        return data;
      } else {
        console.error('Erreur : ', reponse.status);
        return null;
      }
    } catch (error) {
      console.log("Erreur : ", error);
      return null;
    }
  }