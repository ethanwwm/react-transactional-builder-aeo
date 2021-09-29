import React from 'react';

function OrderConfirmationStatusBox(emailPreview) {
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
              <td width="17" style={{ width: '17px' }}>
                &nbsp;
              </td>
              <td>
                <table
                  bgcolor="#ffffff"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style={{
                    border: '1px solid #cccccc',
                    borderCollapse: 'separate',
                    borderRadius: '12px',
                    borderSpacing: '0',
                    tableLayout: 'fixed',
                    margin: '0 auto !important',
                    width: '341px',
                  }}
                  width="341"
                >
                  <tr>
                    <td bgcolor="#f6f6f6" width="341" style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                      <table
                        bgcolor="#f6f6f6"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{
                          backgroundColor: '#f6f6f6',
                          borderCollapse: 'separate',
                          borderSpacing: '0',
                          tableLayout: 'fixed',
                          margin: '0 auto !important',
                          width: '341px',
                          borderTopLeftRadius: '12px',
                          borderTopRightRadius: '12px',
                        }}
                        width="341"
                      >
                        <tr>
                          <td width="30" height="20" style={{ width: '30px', height: '20px' }}>
                            &nbsp;
                          </td>
                          <td width="175" height="20" style={{ width: '175px', height: '20px' }}>
                            &nbsp;
                          </td>
                          <td width="103" height="20" style={{ width: '103px', height: '20px' }}>
                            &nbsp;
                          </td>
                          <td width="30" height="20" style={{ width: '30px', height: '20px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td height="18" style={{ height: '18px' }}>
                            &nbsp;
                          </td>
                          <td height="18" style={{ color: '#888888', fontSize: '11px', lineHeight: '14px', height: '18px', textAlign: 'left' }}>
                            Order Date:
                          </td>
                          <td height="18" style={{ height: '18px' }}>
                            &nbsp;
                          </td>
                          <td height="18" style={{ height: '18px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td height="16" style={{ height: '16px' }}>
                            &nbsp;
                          </td>
                          <td
                            height="16"
                            style={{ color: '#000000', fontSize: '14px', fontWeight: '700', lineHeight: '16px', height: '16px', textAlign: 'left' }}
                          >
                            February 09, 2021
                          </td>
                          <td
                            class="orderLink"
                            height="16"
                            style={{
                              color: '#000000',
                              fontSize: '14px',
                              fontWeight: '700',
                              lineHeight: '16px',
                              textAlign: 'right',
                              textDecoration: 'none',
                              height: '16px',
                            }}
                          >
                            <a
                              href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/trackorder?Email_Address={{notifications.notificationData.[0].customer.email}}&Order_Number={{notifications.notificationData.[0].order.orderSummary.orderNumber}}"
                              target="_blank"
                              style={{
                                color: '#000000',
                                fontSize: '14px',
                                fontWeight: '700',
                                lineHeight: '16px',
                                textAlign: 'right',
                                textDecoration: 'none',
                                height: '16px',
                              }}
                            >
                              #0059655147
                            </a>
                          </td>
                          <td height="16" style={{ height: '16px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td height="20" style={{ height: '20px' }}>
                            &nbsp;
                          </td>
                          <td height="20" style={{ height: '20px' }}>
                            &nbsp;
                          </td>
                          <td height="20" style={{ height: '20px' }}>
                            &nbsp;
                          </td>
                          <td height="20" style={{ height: '20px' }}>
                            &nbsp;
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="30" style={{ height: '30px' }}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 0 !important', width: '341px' }}
                        width="341"
                      >
                        <tr>
                          <td width="30" height="17" style={{ width: '30px', height: '17px' }}></td>
                          <td
                            width="281"
                            height="17"
                            style={{
                              color: '#666666',
                              fontSize: '12',
                              fontWeight: 'normal',
                              lineHeight: '18px',
                              width: '281px',
                              height: '17px',
                              textAlign: 'left',
                            }}
                          >
                            Thanks, User!
                          </td>

                          <td width="30" height="30" style={{ width: '30px', height: '30px' }}></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td width="341" style={{ width: '341px' }}>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '341px' }}
                        width="341"
                      >
                        <tr>
                          <td width="30" height="75" style={{ width: '30px', height: '75px' }}></td>
                          <td
                            width="281"
                            height="75"
                            style={{
                              color: '#000000',
                              fontSize: '26px',
                              fontWeight: '700',
                              lineHeight: '37px',
                              width: '281px',
                              height: '75px',
                              textAlign: 'left',
                            }}
                          >
                            Your order was received.
                          </td>

                          <td width="30" height="75" style={{ width: '30px', height: '75px' }}></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="26" style={{ height: '26px' }}>
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
              <td width="17" style={{ width: '17px' }}>
                &nbsp;
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  } else {
    return `<!-- STATUS BOX -->
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
            <td>
              <table
                bgcolor="#ffffff"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  border: 1px solid #cccccc;
                  border-collapse: separate;
                  border-radius: 12px;
                  border-spacing: 0;
                  table-layout: fixed;
                  margin: 0 auto !important;
                  width: 341px;
                "
                width="341"
              >
                <tr>
                  <!-- Order Date and number-->
                  <td bgcolor="#f6f6f6" width="341" style="border-top-left-radius: 12px; border-top-right-radius: 12px">
                    <table
                      bgcolor="#f6f6f6"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        background-color: #f6f6f6;
                        border-collapse: separate;
                        border-spacing: 0;
                        table-layout: fixed;
                        margin: 0 auto !important;
                        width: 341px;
                        border-top-left-radius: 12px;
                        border-top-right-radius: 12px;
                      "
                      width="341"
                    >
                      <tr>
                        <td width="30" height="20" style="width: 30px; height: 20px">&nbsp;</td>
                        <td width="175" height="20" style="width: 175px; height: 20px">&nbsp;</td>
                        <td width="103" height="20" style="width: 103px; height: 20px">&nbsp;</td>
                        <td width="30" height="20" style="width: 30px; height: 20px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td height="18" style="height: 18px">&nbsp;</td>
                        <td height="18" style="color: #888888; font-size: 11px; line-height: 14px; height: 18px; text-align:left">Order Date:</td>
                        <td height="18" style="height: 18px">&nbsp;</td>
                        <td height="18" style="height: 18px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td height="16" style="height: 16px">&nbsp;</td>
                        <td height="16" style="color: #000000; font-size: 14px; font-weight: 700; line-height: 16px; height: 16px; text-align: left">
                          {{notifications.notificationData.[0].order.orderSummary.orderDate}}
                        </td>
                        <td
                          class="orderLink"
                          height="16"
                          style="
                            color: #000000;
                            font-size: 14px;
                            font-weight: 700;
                            line-height: 16px;
                            text-align: right;
                            text-decoration: none;
                            height: 16px;
                          "
                        >
                          <a
                            href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/trackorder?Email_Address={{notifications.notificationData.[0].customer.email}}&Order_Number={{notifications.notificationData.[0].order.orderSummary.orderNumber}}"
                            target="_blank"
                            style="
                              color: #000000;
                              font-size: 14px;
                              font-weight: 700;
                              line-height: 16px;
                              text-align: right;
                              text-decoration: none;
                              height: 16px;
                            "
                          >
                            #{{notifications.notificationData.[0].order.orderSummary.orderNumber}}
                          </a>
                        </td>
                        <td height="16" style="height: 16px">&nbsp;</td>
                      </tr>
                      <tr>
                        <td height="20" style="height: 20px">&nbsp;</td>
                        <td height="20" style="height: 20px">&nbsp;</td>
                        <td height="20" style="height: 20px">&nbsp;</td>
                        <td height="20" style="height: 20px">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- END Order Date and Number-->
                <tr>
                  <td height="30" style="height: 30px">&nbsp;</td>
                </tr>
                <tr>
                  <!-- Ship Address -->
                  <td>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 0 !important; width: 341px"
                      width="341"
                    >
                      <tr>
                        <td width="30" height="17" style="width: 30px; height: 17px"></td>
                        <td
                          width="281"
                          height="17"
                          style="color: #666666; font-size: 12; font-weight: normal; line-height: 18px; width: 281px; height: 17px; text-align: left"
                        >
                          Thanks, {{notifications.notificationData.[0].customer.firstName}}!
                        </td>

                        <td width="30" height="30" style="width: 30px; height: 30px"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- END Ship Address -->
                <!-- <tr>
                  <td height="30" style="height: 30px">&nbsp;</td>
                </tr> -->
                <tr>
                  <!-- Address Changed Unsuccessful-->
                  <td width="341" style="width: 341px">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 341px"
                      width="341"
                    >
                      <tr>
                        <td width="30" height="75" style="width: 30px; height: 75px"></td>
                        <td
                          width="281"
                          height="75"
                          style="color: #000000; font-size: 26px; font-weight: 700; line-height: 37px; width: 281px; height: 75px; text-align: left"
                        >
                          Your order was received.
                        </td>

                        <td width="30" height="75" style="width: 30px; height: 75px"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- END Address Changed Unsuccessful-->
                <tr>
                  <td height="26" style="height: 26px">&nbsp;</td>
                </tr>
              </table>
            </td>
            <td width="17" style="width: 17px">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- END STATUS BOX -->`;
  }
}

export default OrderConfirmationStatusBox;
