// 7. Create an object 'agenda' with an array of 'contacts'.
// Each contact has 'name' and 'phone'.
// Add a method 'listContacts()' that prints each contact's name and phone.
// Add a method 'addContact(name, phone)' to add a new contact.

let agenda = {
    contacts: [
        {name: "Maria", phone: 51999283007},
        {name: "Fausto", phone: 51986536625},
        {name: "Beatriz", phone: 51991038629},
    ],

    listContacts: function(){
        if (this.contacts.length === 0){
            console.log("There are no contacts to show")
        } else{
            console.log("Contacts:");
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}`);
            });
        }
    },

    addContact: function (name, phone){
        this.contacts.push({ name: name, phone: phone})
        console.log(`Contact "${name}" has been added successfully.`)
    }
}