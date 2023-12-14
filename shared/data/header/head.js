import Link from 'next/link';
import React from 'react'
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, } from "react-bootstrap";
import Selectoptions from './headerdata';
import frenchflag from "../../../public/assets/img/flags/french_flag.jpg"
import germanyflag from "../../../public/assets/img/flags/germany_flag.jpg"
import italyflag from "../../../public/assets/img/flags/italy_flag.jpg"
import russiaflag from "../../../public/assets/img/flags/russia_flag.jpg"
import spainflag from "../../../public/assets/img/flags/spain_flag.jpg"
import users1 from "../../../public/assets/img/users/1.jpg"
import users2 from "../../../public/assets/img/users/2.jpg"
import users3 from "../../../public/assets/img/users/3.jpg"
import users5 from "../../../public/assets/img/users/5.jpg"

const HeadDropDown = () => {

    function Fullscreen() {
        if (
          (document.fullScreenElement && document.fullScreenElement === null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          }
          else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          }
          else if
            (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
          }
        }
        else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if
            (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if
            (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
      }

      const Darkmode = () => {
        document.querySelector("body").classList.toggle("dark-theme");
        document.querySelector("#myonoffswitch2").checked = true
        if(document.body.classList.contains("dark-theme")){
          localStorage.setItem("Spruhadark",true)
          document.querySelector('#myonoffswitch2').checked = true
          document.querySelector('#myonoffswitch8').checked = true
          document.querySelector('#myonoffswitch5').checked = true
        }
        else{
          localStorage.removeItem("Spruhadark")
          document.querySelector('#myonoffswitch2').checked = false
          document.querySelector('#myonoffswitch8').checked = false
          document.querySelector("#myonoffswitch6").checked = true
        }
      }

      const openCloseSidebar1 = () => {
        document.querySelector(".header-settings").classList.toggle("show");
        document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
      };

  return (
    <div className="d-flex order-lg-2 align-items-center ms-auto">
                  <Dropdown className="header-search">
                    <Dropdown.Toggle variant="default" className="px-0">
                      <i className="fe fe-search header-icons fs-18 px-2 lh-5" ></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                      <div className="mb-1">
                      <Selectoptions />
                      </div>
                      <InputGroup className="">
                        <Form.Control type="search" className="form-control rounded-0" placeholder="Search for anything..." onChange={(ele=>{myfunction(ele.target.value); setInputValue(ele.target.value)})} onClick={()=>{setShow1(true)}} />
                        <InputGroup.Text className="btn search-btn ms-auto d-flex">
                          <i className="fe fe-search"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown d-flex main-header-theme">
                    <Nav.Link className="nav-link icon layout-setting" onClick={() => Darkmode()}>
                      <span className="dark-layout">
                        <i className="fe fe-sun header-icons"></i>
                      </span>
                      <span className="light-layout">
                        <i className="fe fe-moon header-icons"></i>
                      </span>
                    </Nav.Link>
                  </Dropdown>
                  <Dropdown className=" main-header-notification flag-dropdown">
                    <Dropdown.Toggle
                      className="nav-link icon country-Flag "
                      variant="default"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
                        <g fill="#0052b4">
                          <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                        </g>
                        <g fill="#d80027">
                          <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                          <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu" style= {{margin: "0px"}}>
                      <Dropdown.Item className="d-flex ">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={frenchflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">French</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={germanyflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Germany</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                          <img
                            src={italyflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Italy</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                          <img
                            src={russiaflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">Russia</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                          <img
                            src={spainflag.src}
                            alt="img"
                          />
                        </span>
                        <div className="d-flex">
                          <span className="mt-2">spain</span>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-md-flex">
                    <div
                      className="nav-link icon full-screen-link"
                      onClick={Fullscreen}
                    >
                      <i className="fe fe-maximize fullscreen-button fullscreen header-icons"></i>
                      <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons"></i>
                    </div>
                  </div>
                  <Dropdown className=" main-header-notification">
                    <Dropdown.Toggle
                      className="nav-link icon"
                      href="#!"
                      variant="default"
                    >
                      <i className="fe fe-bell header-icons"></i>
                      <span className="badge bg-danger nav-link-badge">4</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: 0 }}
                    >
                      <div className="header-navheading">
                        <p className="main-notification-text">
                          You have 1 unread notification
                          <span className="badge bg-pill bg-primary ms-3">
                            View all
                          </span>
                        </p>
                      </div>
                      <div className="main-notification-list">
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media new">
                          <div className="main-img-user online">
                            <img
                              alt="avatar"
                              src={users5.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              Congratulate <strong>Olivia James</strong> for New
                              template start
                            </p>
                            <span>Oct 15 12:32pm</span>
                          </div>
                        </div>
                        </Link>
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media">
                          <div className="main-img-user">
                            <img
                              alt="avatar"
                              src={users2.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              <strong>Joshua Gray</strong> New Message Received
                            </p>
                            <span>Oct 13 02:56am</span>
                          </div>
                        </div>
                        </Link>
                        <Link href={`/components/advancedui/chat`}>
                        <div className="media">
                          <div className="main-img-user online">
                            <img
                              alt="avatar"
                              src={users3.src}
                            />
                          </div>
                          <div className="media-body">
                            <p>
                              <strong>Elizabeth Lewis</strong> added new
                              schedule realease
                            </p>
                            <span>Oct 12 10:40pm</span>
                          </div>
                        </div>
                        </Link>
                      </div>
                      <div className="dropdown-footer">
                        <Link href={`/components/advancedui/chat`}>
                          View All Notifications
                        </Link>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="main-header-notification">
                    <Link className="icon nav-link" href={`/components/advancedui/chat`}>
                      <i className="fe fe-message-square header-icons"></i>
                      <span className="badge bg-success nav-link-badge">6</span>
                    </Link>
                  </div>
                  <Dropdown className="main-profile-menu">
                    <Dropdown.Toggle className="d-flex p-0" variant="default">
                      <span className="main-img-user mx-1">
                        <img
                          alt="avatar"
                          src={users1.src}
                        />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ margin: "0px" }}>
                      <div className="header-navheading">
                        <h6 className="main-notification-title">
                          Sonia Taylor
                        </h6>
                        <p className="main-notification-text">Web Designer</p>
                      </div>
                      
                      <Dropdown.Item
                        className="border-top">
                        <Link href={`/components/pages/profile/`}>
                        <i className="fe fe-user"></i> My Profile
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                      >
                      <Link href={`/components/pages/profile/`}>
                        <i className="fe fe-edit"></i> Edit Profile
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                      >
                      <Link href={`/components/pages/profile/`}>
                        <i className="fe fe-settings"></i> Account Settings
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                      >
                      <Link href={`/components/pages/profile/`}>
                        <i className="fe fe-settings"></i> Support
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                      <Link href={`/components/pages/profile/`}>
                        <i className="fe fe-compass"></i> Activity
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                      <Link href={`/components/authentication/signin/`}>
                        <i className="fe fe-power"></i> Sign Out
                      </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-md-flex header-settings">
                    <Nav.Link
                      href="#!"
                      className="nav-link icon"
                      onClick={() => openCloseSidebar1()}
                    >
                      <i className="fe fe-align-right header-icons"></i>
                    </Nav.Link>
                  </div>
                </div>
  )
}

export default HeadDropDown