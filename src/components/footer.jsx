import React from 'react';

const Footer = ({ emailPreview }) => {
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
              <td class="footerLink" style={{ color: '#888888', fontSize: '11px', lineHeight: '16px', textAlign: 'center' }}>
                <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/content/help/privacy-notice" target="_blank">
                  <span style={{ textDecoration: 'underline' }}>Privacy Notices</span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/email-sign-up" target="_blank">
                  <span style={{ textDecoration: 'underline' }}>Sign Up For Email</span>
                </a>
              </td>
            </tr>
            <tr>
              <td height="16" style={{ height: '16px' }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td class="footerLink" style={{ color: '#888888', fontSize: '11px', lineHeight: '16px', textAlign: 'center' }}>
                Add [ae@notifications.ae.com] to your address book.
              </td>
            </tr>
            <tr>
              <td class="footerLink" style={{ color: '#888888', fontSize: '11px', lineHeight: '16px', textAlign: 'center' }}>
                Our mailing address: 77 Hot Metal Street, Pittsburgh, PA 15203
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  } else {
    return `<!-- FOOTER -->
  <tr>
    <td>
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px"
        width="375"
      >
        <tr>
          <td class="footerLink" style="color: #888888; font-size: 11px; line-height: 16px; text-align: center">
            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/content/help/privacy-notice" target="_blank"
              ><span style="text-decoration: underline">Privacy Notices</span></a
            >
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/email-sign-up" target="_blank"
              ><span style="text-decoration: underline">Sign Up For Email</span></a
            >
          </td>
        </tr>
        <tr>
          <td height="16" style="height: 16px">&nbsp;</td>
        </tr>
        <tr>
          <td class="footerLink" style="color: #888888; font-size: 11px; line-height: 16px; text-align: center">
            Add [ae@notifications.ae.com] to your address book.
          </td>
        </tr>
        <tr>
          <td class="footerLink" style="color: #888888; font-size: 11px; line-height: 16px; text-align: center">
            {{#equals notifications.notificationData.[0].customer.site "us"}} Our mailing address: 77 Hot Metal Street, Pittsburgh, PA 15203 {{/equals}}
            {{#equals notifications.notificationData.[0].customer.site "ca"}} Our mailing address: 300-1969 Upper Water Street, Purdy's Wharf Tower II,
            P.O. Box 730, Halifax, Nova Scotia, B3J 2V1 {{/equals}} {{#equals notifications.notificationData.[0].customer.site "mx"}} Our mailing
            address: AV. Paseo De La Reforma 180, Piso 21, Colonia Juárez, Delegación Cuauhtémoc, Ciudad de México. México {{/equals}} {{#equals
            notifications.notificationData.[0].customer.site "intl"}} Our mailing address: 77 Hot Metal Street, Pittsburgh, PA 15203 {{/equals}}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END FOOTER -->
  <tr>
    <td height="25" style="height: 25px">&nbsp;</td>
  </tr>`;
  }
};

export default Footer;
