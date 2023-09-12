"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react"
import { ThemeSwitch } from "@/components/theme-switch";


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
    <Navbar>
      <NavbarBrand>

        {/* <p className="font-bold text-inherit">Vap</p> */}
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                //endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Ediciones
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="2022"
              description="2022 Primera edición"
              onClick={() => openLinkInNewTab("2022")}
            >
              2022
            </DropdownItem>
            <DropdownItem
              key="2023"
              description="Summer fest 2023"
              onClick={() => openLinkInNewTab("2023")}
            >
              2023
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
            <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
