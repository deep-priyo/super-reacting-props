import Card from "./components/Card";
const App = () => {
  const data = [{ name: 'Ada', profession: 'Painter', img: 'https://images.unsplash.com/photo-1630519047643-0b31f2540a1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Thomas', profession: 'Singer', img: 'https://images.unsplash.com/photo-1527735095040-147bffb4cede?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'John', profession: 'Coder', img: 'https://images.unsplash.com/photo-1552320853-b14fa736e4c0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Raj', profession: 'Pilot', img: 'https://plus.unsplash.com/premium_photo-1661504402886-4a4fefe9dc99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]
  return (
   
      <div className="w-full h-screen  bg-zinc-300 flex gap-4 items-center justify-center">
        {data.map((item, i) => (
          <Card key={i} name={item.name} profession={item.profession} img={item.img} />
        ))}
      </div>
    
  );
};
export default App;
