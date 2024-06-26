
// How to create nested structure using react
// creating siblings (use array)

const parent= React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{}, "I'm an h1 tag"),
         React.createElement("h2",{}, "I'm an h2 tag"),React.createElement("h3",{},"I'm an h3 tag")]
     ),React.createElement("div",{id: "child2"},
        [React.createElement("h1",{}, "I'm an h1 tag"),
         React.createElement("h2",{}, "I'm an h2 tag"),React.createElement("h3",{},"I'm an h3 tag")]
     )
    ]);
 



console.log(parent);
// const heading=React.createElement("h1", {id: "heading"} ,"Hello World From React");
// console.log(heading); // object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converting object to h1 tag and puting it up on the DOM
