import React from 'react';

function GrayDivider(emailPreview) {
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
              <td width="17" height="9" style={{ width: '17px', height: '9px', fontSize: '9px', lineHeight: '9px' }}>
                &nbsp;
              </td>
              <td
                width="341"
                height="9"
                style={{ borderBottom: '1px solid #d6d6d6', width: '341px', height: '9px', fontSize: '9px', lineHeight: '9px' }}
              >
                &nbsp;
              </td>
              <td width="17" height="9" style={{ width: '17px', height: '9px', fontSize: '9px', lineHeight: '9px' }}>
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  } else {
    return `<tr>
    <td>
      <!-- Status and Product tile - gray divider-->
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px"
        width="375"
      >
        <tr>
          <td width="17" height="9" style="width: 17px; height: 9px; font-size: 9px; line-height: 9px">&nbsp;</td>
          <td width="341" height="9" style="border-bottom: 1px solid #d6d6d6; width: 341px; height: 9px; font-size: 9px; line-height: 9px">
            &nbsp;
          </td>
          <td width="17" height="9" style="width: 17px; height: 9px; font-size: 9px; line-height: 9px">&nbsp;</td>
        </tr>
       
      </table>
    </td>
    <!-- End gray divider -->
  </tr>`;
  }
}

export default GrayDivider;
