const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, {
      name: "shera",
      animal: "tiger",
      breed: "alpha",
    }),
    React.createElement(Pet, {
      name: "badshah",
      animal: "dog",
      breed: "german shepherd",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
