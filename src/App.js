import './App.scss';
import Logo from './components/logo';
import StatusBox from './components/statusBox';
import NeedHelp from './components/needHelp';
import React, { useState } from 'react';
import PreparingOrder from './components/preparingOrder';
import Spacer from './components/spacer';
import Footer from './components/footer';
import OrderConfirmationStatusBox from './components/orderConfirmationStatusBox';
import FreeReturnLabel1 from './components/freeReturnLabel1';
import FreeReturnLabel2 from './components/freeReturnLabel2';
import logo from './assets/AEO.png';
import deleteButton from './assets/delete.svg';
import downloadButton from './assets/download.svg';
import testButton from './assets/test.svg';
import tipsButton from './assets/tips.svg';
import Fade from 'react-reveal/Fade';
import SectionDivider from './components/sectionDivider';
import GrayDivider from './components/grayDivider';
import ProductTile1 from './components/productTile1';
import BagCheckIcon from './assets/icons/bag-check-outline.svg';
import MailIcon from './assets/icons/mail-outline.svg';
import ReturnIcon from './assets/icons/return-up-back-outline.svg';
import ClockIcon from './assets/icons/time-outline.svg';
import CarIcon from './assets/icons/car-outline.svg';
import EarthIcon from './assets/icons/earth-outline.svg';
import HourglassIcon from './assets/icons/hourglass-outline.svg';
import CancelledIcon from './assets/icons/close-circle-outline.svg';

const leftComponents = [StatusBox, OrderConfirmationStatusBox, NeedHelp];
const freeReturnLabels = [FreeReturnLabel1, FreeReturnLabel2];
const dividers = [SectionDivider, GrayDivider];
const others = [PreparingOrder];
const productTiles = [ProductTile1];

let compiledEmail = [
  {
    id: 0,
    code: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if !mso]>-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      * {
        box-sizing: border-box !important;
      }

      #wrapper {
        margin: 0;
        padding: 0;
      }

      body,
      .body-text {
        font-family: -apple-system, 'Roboto Regular', Arial, sans-serif;
        font-size: 12px;
        line-height: 12px;
      }

      a[href^='tel'] {
        color: #000000 !important;
        font-weight: bold !important;
      }

      a:-webkit-any-link,
      a:hover {
        color: inherit !important;
        text-decoration: none !important;
        cursor: pointer;
      }

      p {
        margin: 0;
      }

      .footerLink a {
        color: #888888;
        text-decoration: none;
      }

      .helpLink a,
      .addressLink a,
      .orderLink a,
      .prodNameLink a,
      .vgcNameLink a {
        color: #000000;
        text-decoration: none;
      }

      .returnsLink a,
      .storeLink a,
      .directionsLink a {
        color: #000000;
        text-decoration: underline;
      }

      .returnPolicyLink a {
        color: #888888;
        text-decoration: underline;
      }

      .shipAddress a {
        color: #666666;
        text-decoration: none;
      }

      .vgcLink a,
      .pickupPersonLink a {
        color: #888888;
        text-decoration: none;
      }

      img {
        -ms-interpolation-mode: bicubic;
      }

      .autolinks-hide a[x-apple-data-detectors],
      .autolinks-show a[x-apple-data-detectors],
      *:root:root .autolink-hide a,
      *:root:root .autolink-show a {
        border-bottom: none;
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: inherit !important;
      }

      .autolinks-hide a[x-apple-data-detectors],
      *:root:root .autolink-hide a {
        border-bottom: inherit;
      }

      sup {
        font-size: 75%;
        line-height: 0;
      }

      @media all and (max-width: 600px) {
        #wrapper,
        *[class].x_container,
        *[class].menu {
          min-width: 0 !important;
          -moz-text-size-adjust: none;
          -ms-text-size-adjust: none;
          -webkit-text-size-adjust: none;
          width: 100% !important;
        }

        *[class].mobile-hide {
          display: none;
        }
      }
    </style>

    <!--[if mso]>
      <style type="text/css">
        #wrapper {
          margin: 0 auto;
          padding: 0;
        }

        .body-text {
          font-family: Arial, sans-serif;
        }
      </style>
    <![endif]-->

    <title>Your verification code from AE.</title>
  </head>

  <body bgcolor="#FFFFFF" class="autolinks-show" style="padding: 0" link="#295AA6" alink="#295AA6" vlink="#295AA6" yahoo="fix">
    <!-- Body Modules Start -->
    <!-- PRE-HEADER SECTION -->
    <div style="display: none; font-size: 0; height: 0; opacity: 0; visibility: hidden; width: 0">
      <font color="#FFFFFF" size="1" style="color: transparent; display: none !important; font-size: 0; line-height: 0"></font>
    </div>
    <!-- END PRE-HEADER -->
    <!-- BEGINNING OF EMAIL WRAPPER - DO NOT EDIT-->
    <div align="center" id="wrapper" style="background-color: #ffffff; width: 100% !important">
      <!-- MICROSOFT SPECIFIC CODE - EMAIL WRAPPER BEGINNING -->
      <!--[if mso]>
                 <table atlign="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 5% !important; width: 375px;" width="375">
                  <tr>
                   <td>
                    <![endif]-->
      <!-- END MICROSOFT SPECIFIC CODE - EMAIL WRAPPER BEGINNING -->
      <!-- WRAPPER TABLE -->
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px"
        width="375"
      >`,
  },
];

function App() {
  const [emailPreview, setEmailPreview] = React.useState([]);
  const [deleteElementTrigger, setDeleteElementTrigger] = React.useState();
  const [counter, setCounter] = useState(1);
  const [showProductLoop, setShowProductLoop] = useState(false);
  const [customJson, setCustomJson] = useState('');

  React.useEffect(() => {
    for (let index = 0; index < emailPreview.length; index++) {
      if (parseInt(emailPreview[index].key) === deleteElementTrigger) {
        let temp = emailPreview.filter((component) => parseInt(component.key) !== deleteElementTrigger);
        console.log(temp);

        setEmailPreview(temp);

        break;
      }
    }
  }, [deleteElementTrigger]);

  const SpacerSelector = () => {
    return (
      <div className="spacer-card">
        <h2>Spacer</h2>
        <div className="card">
          <div
            className="spacer-selection"
            onClick={() => {
              addComponent(Spacer, true, '20');
            }}
          >
            <p className="number">20 </p> <p className="px">px</p>
          </div>

          <div
            className="spacer-selection"
            onClick={() => {
              addComponent(Spacer, true, '30');
            }}
          >
            <p className="number">30</p> <p className="px">px</p>
          </div>

          <div
            className="spacer-selection"
            onClick={() => {
              addComponent(Spacer, true, '40');
            }}
          >
            <p className="number">40</p> <p className="px">px</p>
          </div>
        </div>
      </div>
    );
  };

  function deleteComponent(componentId) {
    for (let index = 0; index < compiledEmail.length; index++) {
      if (compiledEmail[index].id === componentId) {
        compiledEmail.splice(index, 1);
        break;
      }
    }
  }

  function addComponent(component, isSpacer = false, spacerSize = null, loop = null) {
    console.log(component, isSpacer, spacerSize);
    let temp = emailPreview;
    temp.push(
      <div
        className="delete-button-div"
        key={counter}
        onMouseEnter={() => {
          let element = document.getElementById('delete-button-' + `${counter}`);
          element.style.opacity = 1;
        }}
        onMouseLeave={() => {
          let element = document.getElementById('delete-button-' + `${counter}`);
          element.style.opacity = 0;
        }}
      >
        <div
          className="delete-button"
          id={'delete-button-' + `${counter}`}
          onClick={() => {
            deleteComponent(counter);
            setDeleteElementTrigger(counter);
          }}
        >
          <b>Delete</b>
        </div>
        {isSpacer ? component(true, spacerSize) : component(true)}
      </div>
    );
    setEmailPreview(temp);

    let newComponentObjectTracker = { id: counter, code: isSpacer ? component(false, spacerSize) : component(false), loop: loop ? loop : null };
    compiledEmail.push(newComponentObjectTracker);
    setCounter(counter + 1);
  }

  function addProductTile(component) {
    console.log(document.getElementById('product-tile-loop-selection-1').style.opacity);
    // document.getElementById('product-tile-loop-selection').style.display = 'fixed';
    // document.getElementById('product-tile-loop-selection').style.opacity = 1;
  }

  const Navbar = () => {
    let temp = ``;

    return (
      <div className="navbar-div">
        <div className="left-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="right-buttons">
          <img className="navbar-buttons" src={deleteButton} alt="" />
          <img className="navbar-buttons" src={tipsButton} alt="" />
          <img className="navbar-buttons" src={testButton} alt="" />
          <img
            className="navbar-buttons"
            onClick={() => {
              compiledEmail.forEach((component) => {
                temp += component.code;
              });

              temp += `</table>
              </div>
            </body>
          </html>`;

              const element = document.createElement('a');
              const file = new Blob([temp], { type: 'text/plain' });
              element.href = URL.createObjectURL(file);
              element.download = 'myFile.html';
              document.body.appendChild(element); // Required for this to work in FireFox
              element.click();
            }}
            src={downloadButton}
            alt=""
          />
        </div>
      </div>
    );
  };

  const ProductTileLoopView = () => {
    React.useEffect(() => {
      document.getElementById('product-tile-loop-selection-1').style.opacity = 1;
    }, []);

    let icons = [
      { icon: ReturnIcon, description: 'Returned' },
      { icon: ClockIcon, description: 'Delayed' },
      { icon: MailIcon, description: 'Emailed' },
      { icon: BagCheckIcon, description: 'RFP' },
      { icon: HourglassIcon, description: 'Processing' },
      { icon: EarthIcon, description: 'Shipped' },
      { icon: CancelledIcon, description: 'Cancelled' },
      { icon: CarIcon, description: 'Picked Up' },
    ];

    let temp = [];

    icons.forEach((component) => {
      temp.push(
        <div
          className="selection-tile"
          onClick={() => {
            console.log('clicked');
          }}
        >
          <div className="spacer-div">
            <img src={component.icon} alt="" />
          </div>
          <h2>{component.description}</h2>
        </div>
      );
    });

    return (
      // <Fade>
      <div className="product-tile-loop-selection" id="product-tile-loop-selection-1">
        <h1>What bucket is this product tile looping?</h1>
        {/* <Fade cascade top> */}
        <div className="selection-area">
          {temp}
          <input
            type="text"
            name=""
            value={customJson}
            onChange={(e) => {
              console.log(e.target.value);
              setCustomJson(e.target.value);
            }}
            className="custom-json"
          />
        </div>
        {/* </Fade> */}
      </div>
      // </Fade>
    );
  };

  return (
    <div className="App">
      {showProductLoop ? <ProductTileLoopView /> : <React.Fragment />}
      <Navbar />
      <div className="content">
        <div className="card-section">
          <div className="left">
            <h2>Logo</h2>
            <div
              className="selection"
              onClick={() => {
                addComponent(Logo);
              }}
            >
              <div className="component-card">{Logo(true)}</div>
            </div>
            <h2>Status Box</h2>

            {leftComponents.map((component) => {
              return (
                <div
                  className="selection"
                  onClick={() => {
                    addComponent(component);
                  }}
                >
                  <div className="component-card">{component(true)}</div>
                </div>
              );
            })}

            <h2>Section Dividers</h2>
            {dividers.map((component) => {
              return (
                <div
                  className="selection"
                  onClick={() => {
                    addComponent(component);
                  }}
                >
                  <div className="component-card">{component(true)}</div>
                </div>
              );
            })}

            <h2>Product Tiles</h2>
            {productTiles.map((component) => {
              return (
                <div
                  className="selection"
                  onClick={() => {
                    // addProductTile(component);
                    setShowProductLoop(true);
                  }}
                >
                  <div className="component-card">{component(true)}</div>
                </div>
              );
            })}
          </div>

          <div className="right">
            <SpacerSelector />

            <h2>Footer</h2>
            {
              <div
                className="selection"
                onClick={() => {
                  addComponent(Footer);
                }}
              >
                <div className="component-card">{Footer(true)}</div>
              </div>
            }

            <h2>Free Return Labels</h2>
            {freeReturnLabels.map((component) => {
              return (
                <div
                  className="selection"
                  onClick={() => {
                    addComponent(component);
                  }}
                >
                  <div className="component-card">{component(true)}</div>
                </div>
              );
            })}

            <h2>Others</h2>
            {others.map((component) => {
              return (
                <div
                  className="selection"
                  onClick={() => {
                    addComponent(component);
                  }}
                >
                  <div className="component-card">{component(true)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="email-preview">{emailPreview}</div>
      </div>
    </div>
  );
}

export default App;
