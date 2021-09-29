import React from 'react';
import ConvertStyle from '../helpers/convertStyle';

function Logo(emailPreview) {
  if (emailPreview) {
    return (
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '375px' }}
            width="375"
          >
            <tr>
              <td height="25" style={{ height: '25px' }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '375px' }}
                  width="375"
                >
                  <tr>
                    <td height="31" width="61" style={{ height: '31px', width: '61px' }}>
                      &nbsp;
                    </td>
                    <td height="31" width="178" style={{ height: '31px', width: '178px', textAlign: 'left' }}>
                      <a href="https://www.ae.com/{{notificationData.site}}/{{notifications.notificationData.[0].customer.locale}}" target="_blank">
                        <img
                          style={{ width: '158px', height: '11px' }}
                          src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_AELogo2?scl=1&qlt=100"
                          alt="Turn your images on. Shop AEO"
                          width="158"
                          height="11"
                          border="0"
                        />
                      </a>
                    </td>
                    <td height="31" width="75" style={{ height: '31px', width: '75px' }}>
                      <a
                        href="https://www.ae.com/{{notificationData.site}}/{{notifications.notificationData.[0].customer.locale}}/c/aerie/cat4840006"
                        target="_blank"
                      >
                        <img
                          style={{ width: '75px', height: '31px' }}
                          src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_aerieLogo2?scl=1&qlt=100"
                          alt="Turn your images on. Shop Aerie"
                          width="75"
                          height="31"
                          border="0"
                        />
                      </a>
                    </td>
                    <td height="31" width="61" style={{ height: '31px', width: '61px' }}>
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td height="25" style={{ height: '25px' }}>
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  } else {
    return `<!-- LOGOS -->
    <tr>
        <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px;" width="375">
                <tr>
                    <td height="25" style="height: 25px;">&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px;" width="375">
                            <tr> 
                                <td height="31" width="61" style="height: 31px; width: 61px;">&nbsp;</td>
                                <td height="31" width="178" style="height: 31px; width: 178px; text-align: left;"> <!-- AE -->
                                    <a href="https://www.ae.com/{{notificationData.site}}/en" target="_blank">
                                        <img style="width: 158px; height: 11px;"
                                            src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_AELogo2?scl=1&qlt=100"
                                            alt="Turn your images on. Shop AEO" width="158" height="11" border="0" />
                                    </a>
                                </td>
                                <td height="31" width="75" style="height: 31px; width: 75px;"> <!-- Aerie -->       
                                    <a href="https://www.ae.com/{{notificationData.site}}/en/c/aerie/cat4840006" target="_blank">
                                        <img style="width: 75px; height: 31px;"
                                            src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_aerieLogo2?scl=1&qlt=100"
                                            alt="Turn your images on. Shop Aerie" width="75" height="31" border="0" />
                                    </a>
                                </td>
                                <td height="31" width="61" style="height: 31px; width: 61px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="25" style="height: 25px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
<!-- END LOGOS -->`;
  }
}

export default Logo;
