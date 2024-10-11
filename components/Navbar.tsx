"use client"

import { Link as ScrollLink} from "react-scroll"

const links=[
    {name: 'home', target:'home',offset:-100},
    {name: 'about', target:'about',offset:-80},
    {name: 'class', target:'class',offset:-80},
    {name: 'team', target:'team',offset:0},
    {name: 'prices', target:'prices',offset:-40},
    {name: 'testimonials', target:'testimonials',offset:0},
    {name: 'blog', target:'blog',offset:0},
    {name: 'contact', target:'contact',offset:0},

];
export default function Navbar({containerStyles}: {containerStyles:string}) {
  return (
    <nav className={`${containerStyles}`}>
        {
            links.map((link,index) => {
                return (
                <ScrollLink
                 key={index}
                 to={link.target} 
                 offset={link.offset} 
                 smooth spy 
                 activeClass="active"
                 className="cursor-pointer hover:text-accent transition-all" >
                    {link.name}
                </ScrollLink>)
            }
        )
        }         
            
    </nav>
  )
}
