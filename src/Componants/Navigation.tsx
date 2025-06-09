import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { IoMdSearch } from "react-icons/io";
import { DarkThemeToggle } from "flowbite-react";




function Navigation(){
    const icon = './src/assets/icon.jpg'
    let avatar = './src/assets/avatar.jpg'
return(
      <Navbar fluid rounded>
        <NavbarBrand href="/">
        <>
          <img src={icon} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">uniess cards</span>
          </>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={avatar} rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/About">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
        <NavbarBrand>
          <TextInput rightIcon={IoMdSearch}/>
          </NavbarBrand>
          <DarkThemeToggle/>
      </Navbar>
    );
  }

export default Navigation