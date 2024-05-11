import "./App.css";

function Avatar() {
  return <img src="girl.png" alt="huan" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>忧 欢</h1>
      <p>回眸一笑百媚生，六宫粉黛无颜色。</p>
      <p>后宫佳丽三千人，三千宠爱集一身。</p>
      <p>西湖烟柳，君向北方，我向西</p>
    </div>
  );
}
function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="仙女" emoji="💪" color="blue" />
      <Skill skill="聪慧" emoji="💪" color="orange" />
      <Skill skill="气质" emoji="💪" color="yellow" />
      <Skill skill="活泼" emoji="👶" color="orangered" />
    </div>
  );
}

export default function App() {
  return (
    <main className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </main>
  );
}
