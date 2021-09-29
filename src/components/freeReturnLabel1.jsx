import React from 'react';

function FreeReturnLabel1(emailPreview) {
  if (emailPreview) {
    return (
      <tr>
        <td width="17" style={{ width: '17px' }}>
          &nbsp;
        </td>
        <td width="341" style={{ width: '341px' }}>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style={{
              borderCollapse: 'separate',
              borderRadius: '10px',
              borderSpacing: '0',
              tableLayout: 'fixed',
              margin: '0 auto !important',
              width: '339px',
            }}
            width="341"
          >
            <tr>
              <td width="341" style={{ width: '341px' }}>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style={{
                    border: '1px solid #d6d6d6',
                    borderCollapse: 'separate',
                    borderRadius: '10px',
                    borderSpacing: '0',
                    tableLayout: 'fixed',
                    margin: '0 auto !important',
                    width: '341px',
                  }}
                  width="341"
                >
                  <tr>
                    <td width="341" style={{ width: '341px' }}>
                      <table
                        bgcolor="#f6f6f6"
                        align="center"
                        border="0"
                        cellpadding="0"
                        style={{
                          backgroundColor: '#f6f6f6',
                          textAlign: 'center',
                          borderCollapse: 'separate',
                          borderTopLeftRadius: '10px',
                          borderTopRightRadius: '10px',
                          borderSpacing: '0',
                          tableLayout: 'fixed',
                          margin: '0 auto !important',
                          width: '341px',
                        }}
                        cellspacing="0"
                        width="341"
                      >
                        <tr>
                          <td
                            width="341"
                            height="50px"
                            style={{ color: '#000000', fontSize: '16px', fontWeight: '700', lineHeight: '18px', height: '50px', width: '341px' }}
                          >
                            Returns & exchanges are on us!
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '281px' }}
                        width="341"
                      >
                        <tr>
                          <td width="26" height="28" style={{ width: '26px', height: '28px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td
                            width="341"
                            height="16"
                            style={{ color: '#666666', fontSize: '12px', textAlign: 'center', lineHeight: '18px', width: '341px', height: '16px' }}
                          >
                            This order qualifies for free returns. If you aren't completely happy, print a prepaid shipping label and send it back.
                            Easy as that.
                            <a href="https://www.ae.com/{{notificationData.customer.site}}/en/content/help/return-policy">
                              <span style={{ textDecoration: 'underline' }}>Return Policy</span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="26" height="36" style={{ width: '26px', height: '30px' }}>
                            &nbsp;
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td width="17" style={{ width: '17px', borderRadius: '10px' }}>
          &nbsp;
        </td>
      </tr>
    );
  } else {
    return `
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
    <td width="17" style="width: 17px">&nbsp;</td>
    <td width="341" style="width: 341px">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse: separate;
          border-radius: 10px;
          border-spacing: 0;
          table-layout: fixed;
          margin: 0 auto !important;
          width: 339px;
        "
        width="341"
      >
        <tr>
          <td width="341" style="width: 341px">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style="
                border: 1px solid #d6d6d6;
                border-collapse: separate;
                border-radius: 10px;
                border-spacing: 0;
                table-layout: fixed;
                margin: 0 auto !important;
                width: 341px;
              "
              width="341"
            >
              <tr>
                <td width="341" style="width: 341px">
                  <table
                    bgcolor="#f6f6f6"
                    align="center"
                    border="0"
                    cellpadding="0"
                    style="
                      background-color: #f6f6f6;
                      text-align: center;
                      border-collapse: separate;
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                      border-spacing: 0;
                      table-layout: fixed;
                      margin: 0 auto !important;
                      width: 341px;
                    "
                    cellspacing="0"
                    width="341"
                  >
                    <tr>
                      <!--<td width="17px" height="50px" style="width: 17px; height: 50px">&nbsp;</td>-->
                      <td
                        width="341"
                        height="50px"
                        style="color: #000000; font-size: 16px; font-weight: 700; line-height: 18px; height: 50px; width: 341px"
                      >
                        Returns & exchanges are on us!
                      </td>
                      <!--<td width="17px" height="50px" style="width: 17px; height: 50px"></td>-->
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 281px"
                    width="341"
                  >
                    <tr>
                      <td width="26" height="28" style="width: 26px; height: 28px">&nbsp;</td>
                    </tr>
                    <tr>
                      <td
                        width="341"
                        height="16"
                        style="color: #666666; font-size: 12px; text-align: center; line-height: 18px; width: 341px; height: 16px"
                      >
                        This order qualifies for free returns. If you aren't completely happy, print a prepaid shipping label and send it
                        back. Easy as that.
                        <a href="https://www.ae.com/{{notificationData.customer.site}}/en/content/help/return-policy"
                          ><span style="text-decoration: underline">Return Policy</span></a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td width="26" height="36" style="width: 26px; height: 30px">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td width="17" style="width: 17px; border-radius: 10px">&nbsp;</td>
  </tr>
  </table>
            </td>
            </tr>`;
  }
}

export default FreeReturnLabel1;
