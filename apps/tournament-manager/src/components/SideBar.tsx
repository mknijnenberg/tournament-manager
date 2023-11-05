import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <aside className="bg-slate-800 h-full dark:bg-slate-400">
      <div className="flex items-center justify-center h-16 text-white">
        Sport Planner
      </div>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/table-tennis">Tafeltennis</Link>
          </li>
          <li>
            <Link to="/basketball">Basketball</Link>
          </li>
          <li>
            <Link to="/tennis">Tennis</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
