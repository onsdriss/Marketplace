import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/*<span className="headerTitleSm">React & Node</span>*/}
        {/*<span className="headerTitleLg">Blog</span>*/}
      </div>
      <img
        className="headerImg"
        src="https://img.fuelcellsworks.com/wp-content/uploads/2020/05/fuel-cell-stack-detail_res_1280x720-1024x576.jpg"
        alt=""
      />
    </div>
  );
}