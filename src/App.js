import logo from './logo.svg';
import './App.scss';
import Logo from './components/logo';
import StatusBox from './components/statusBox';
import NeedHelp from './components/needHelp';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import PreparingOrder from './components/preparingOrder';

const components = [Logo, StatusBox, NeedHelp, PreparingOrder];
let compiledEmail = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
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
      >`;

function App() {
  const [emailPreview, setEmailPreview] = React.useState([]);
  let componentTracker = [];
  const [size, setSize] = React.useState();
  const [firstRender, setFirstRender] = React.useState(true);
  const [emailPreviewState, setEmailPreviewState] = React.useState(true);

  let spacerHTML = (
    <tr>
      <td height={size} style={{ height: size + 'px', lineHeight: size + 'px' }}>
        &nbsp;
      </td>
    </tr>
  );
  const Spacer = () => {
    return (
      <div className="spacer-card">
        <h2>Spacer</h2>
        <div className="card">
          <div
            className="spacer-selection"
            onClick={() => {
              setSize('20');
            }}
          >
            <p className="number">20 </p> <p className="px">px</p>
          </div>

          <div
            className="spacer-selection"
            onClick={() => {
              setSize('30');
            }}
          >
            <p className="number">30</p> <p className="px">px</p>
          </div>

          <div
            className="spacer-selection"
            onClick={() => {
              setSize('40');
            }}
          >
            <p className="number">40</p> <p className="px">px</p>
          </div>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    if (!firstRender) {
      // console.log(size);
      let temp = [emailPreview];
      temp.push(spacerHTML);
      setEmailPreview(temp);
    }

    setSize('');

    setFirstRender(false);
  }, [size]);

  React.useEffect(() => {}, [emailPreview]);

  return (
    <div className="App">
      <div className="card-section">
        <h2>Components</h2>
        {/* FOR MULTIPLE COMPONENT RENDERING */}
        {components.map((Component) => {
          // console.log(component);
          return (
            <div
              className="selection"
              onClick={() => {
                let temp = [emailPreview];
                temp.push(<Component emailPreview={true} />);
                setEmailPreview(temp);
                console.log(emailPreview);
              }}
            >
              <div className="component-card">{<Component emailPreview={true} />}</div>
            </div>
          );
        })}

        {/* TESTING FOR LOGO AND VIEW SWITCH */}
        {/* <div
          className="selection"
          onClick={() => {
            let temp = [emailPreview];
            temp.push(<Logo emailPreview={true} />);
            componentTracker.push(<Logo />);
            setEmailPreview(temp);
          }}
        >
          <div className="component-card">
            <Logo emailPreview={true} />
          </div>
        </div> */}
        <Spacer />
      </div>

      <div className="email-preview">{emailPreview}</div>
      <button
        className="button button_primary"
        onClick={() => {
          setEmailPreviewState(false);
          compiledEmail +=
            Logo(false) +
            `</table>
          </div>
        </body>
      </html>`;
          console.log(emailPreviewState);
          console.log(compiledEmail);
          console.log(<Logo emailPreview={false} />);

          const element = document.createElement('a');
          const file = new Blob([compiledEmail], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = 'myFile.html';
          document.body.appendChild(element); // Required for this to work in FireFox
          element.click();
        }}
      >
        Export Email
      </button>
    </div>
  );
}

export default App;
