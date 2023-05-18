const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const list = document.getElementById("list");

    const h1 = document.createElement("h1");

    h1.innerHTML = "FREELANCER";
    root.appendChild(h1);

    const item = document.createElement("li");

    item.innerHTML = users.map((user) => {
        return `<li>${user.name} ${user.age} ${user.occupation}</li>`;
    }).join("");
    list.appendChild(item);

}

//call the main function
main();