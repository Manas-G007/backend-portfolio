
let people;

class PeopleDAO {
  static async injectDB(conn) {
    if (people) {
      return;
    }
    try {
      people = await conn.db("people").collection("person");
    } catch (e) {
      console.error(`Unable to establish collection handles in peopleDAO: ${e}`);
    }
  }

  static async addPeople(name,email,message) {
    try {
      const peopleDoc = {
        name:name,
        email:email,
        message:message
      };
      // console.log("adding");
      return await people.insertOne(peopleDoc);
    } catch (e) {
      console.error(`Unable to post person: ${e}`);
      return { error: e };
    }
  }

}

module.exports = PeopleDAO;
