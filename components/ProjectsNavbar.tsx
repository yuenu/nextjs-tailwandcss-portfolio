import { Category } from "../type"

type NavbarProps = {
  value: Category | 'all'
  handleerFilterCategory: (category: Category | 'all') => void
  active: string
}

export const Navbar: React.FC<NavbarProps> = ({ value, handleerFilterCategory, active }) => {

  let classes = "capitalize cursor-pointer hover:text-green"
  if (active === value) classes += ' text-green font-bold'
  return (
    <li className={classes} onClick={() => handleerFilterCategory(value)}>
      {value}
    </li>
  )
}

type ProjectsNavbarProps = {
  handleerFilterCategory: (category: Category | 'all') => void
  active: string
}

const ProjectsNavbar: React.FC<ProjectsNavbarProps> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <Navbar value="all" {...props}></Navbar>
      <Navbar value="react" {...props}></Navbar>
      <Navbar value="mongo" {...props}></Navbar>
      <Navbar value="django" {...props}></Navbar>
      <Navbar value="node" {...props}></Navbar>
    </div>
  )
}

export default ProjectsNavbar
