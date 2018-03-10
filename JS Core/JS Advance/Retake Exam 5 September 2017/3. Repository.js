class Repository { 
    constructor(properties){
        this.properties = properties
        this.Data = new Map() 
        this.mapCount = 0      
    }
    
    add(entity){
        let IsInccorect = false;
        let entityProp = Object.getOwnPropertyNames(entity)
        let propertiesProp = Object.getOwnPropertyNames(this.properties)
        if(entityProp.toString() !== propertiesProp.toString())
        {
            propertiesProp.forEach(a => {
                if(!entityProp.includes(a)){
                    IsInccorect = true;
                    throw new Error(`Property ${a} is missing from the entity!`)
                }
            })
        }
        for (let ent in entity) {
            if(typeof entity[ent] !== this.properties[ent]){
                IsInccorect = true;
                throw new TypeError(`Property ${ent} is of incorrect type!`)
            }
        }
        if(!IsInccorect){            
         this.Data.set(this.mapCount,entity)
         this.mapCount++
        }
        return this.mapCount
    }
    get(id){
        if(!this.Data.has(id) && id < 0){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        return this.Data.get(id)
    }
    update(id,newEntity){
        this.Data.set(id,newEntity)
    }
    del(id){
        this.Data.delete(id)
    }
    get count(){
        return this.Data.size
    }   
}


// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
// let anotherEntity = {
//     name1: 'Nakov',
//     age: 26,
//     birthday: new Date(1991, 0, 21)
// };
// repository.add(anotherEntity); // should throw an Error
// anotherEntity = {
//     name: 'Nakov',
//     age: 26,
//     birthday: 1991
// };
// repository.add(anotherEntity); // should throw a TypeError
// repository.del(-1); // should throw Error for invalid id

