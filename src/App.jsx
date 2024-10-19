import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const data = [

    { name: "Thomas", profession: "Leader", img: "https://i1.sndcdn.com/artworks-3PH37YWBsts0toU7-domHbA-t500x500.jpg", freind: false },

    { name: "John", profession: "Soldier", img: "https://i.pinimg.com/originals/1d/33/40/1d3340e95a406c42067f80f32388172d.jpg", freind: false },
    { name: "Ada", profession: "Activist", img: "https://m.edna.cz/runtime/userfiles/series/peaky-blinders/Ada4-212b6a6fd00d625b3c1bb65c851f66c5.jpg", freind: false },
    { name: "Arthur", profession: "Enforcer", img: "https://i.pinimg.com/564x/75/40/50/7540500d6367877068396c58644e02c7.jpg", freind: false },
  ];

  const [val, setVal] = useState(data);

  // Modify friend state
  const handleFriendsButton = (cardIndex) => {
    setVal((previous) => {
      return previous.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, freind: !item.freind };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {val.map((item, i) => (
        <Card key={i} func={handleFriendsButton} values={item} index={i} />
      ))}
    </div>
  );
};
export default App;
