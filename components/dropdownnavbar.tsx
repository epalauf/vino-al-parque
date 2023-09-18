"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react"
import { ThemeSwitch } from "@/components/theme-switch";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'] });

export const DropDownNavbar = () => {

  const openLinkInNewTab = (year: string) => {
    if(year === '2022') {
      let url = "https://drive.google.com/drive/folders/1jG12RDQUduBXr8FxkabVY7iIcZaiI8G_"
      const newTab = window.open(url, "_blank");
      if (newTab) {
        newTab.focus();
      }
    }
    if(year === '2023') {
      let url = "https://drive.google.com/drive/folders/1uLZMN_y1iXl3VpXvLVfxsMDpuZ0r3-SI"
      const newTab = window.open(url, "_blank");
      if (newTab) {
        newTab.focus();
      }
    }
    
  };
  return (
    <Navbar className={`dropdownnavbar ${montserrat.className}`}>
      <NavbarBrand>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                size="lg"
              >
                Ediciones Anteriores
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="AVP"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="2022"
              description="2022 Primera edición"
              onClick={() => openLinkInNewTab("2022")}
              className="dropdown-menu__dropdown-item"
            >
              2022
            </DropdownItem>
            <DropdownItem
              key="2023"
              description="Summer fest 2023"
              onClick={() => openLinkInNewTab("2023")}
              className="dropdown-menu__dropdown-item"
            >
              2023
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem> */}
        <NavbarItem>
            {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
