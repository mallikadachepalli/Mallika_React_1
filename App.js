
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", 
{ id: "child1" }, [React.createElement("h1", {}, "I am a h1 tag!"),React.createElement("h2", {}, "I am a h2 tag!")]),
React.createElement("div", 
{ id: "child2" }, [React.createElement("h1", {}, "I am a h1 tag!"),React.createElement("h2", {}, "I am a h2 tag!")])
])


const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello Shiva from Mallika,React first");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


root.render(parent);