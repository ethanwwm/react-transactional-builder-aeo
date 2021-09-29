import React from 'react';

function StatusBox(emailPreview) {
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
                    <td height="40" style={{ height: '40px' }}>
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
                              textAlign: 'center',
                            }}
                          >
                            Ethan, you requested a change…
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
                          <td width="30" height="32" style={{ width: '30px', height: '32px' }}></td>
                          <td
                            width="281"
                            height="75"
                            style={{
                              color: '#000000',
                              fontSize: '26px',
                              fontWeight: '700',
                              lineHeight: '32px',
                              width: '281px',
                              height: '32px',
                              textAlign: 'center',
                            }}
                          >
                            Reset your password.
                          </td>

                          <td width="30" height="32" style={{ width: '30px', height: '32px' }}></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="25" style={{ height: '25px' }}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td width="341" style={{ width: '341px' }}>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{
                          borderCollapse: 'collapse',
                          borderSpacing: '0',
                          tableLayout: 'fixed',
                          margin: '0 auto !important',
                          width: '341px',
                          textAlign: 'center',
                        }}
                        width="341"
                      >
                        <tr>
                          <td>
                            <a href="{{notificationData.customer.resetEmailUrl.text}}" target="_blank">
                              <img
                                src="https://s7d2.scene7.com/is/image/aeo/ResetYourPassword_button?scl=1&qlt=100"
                                alt="chat"
                                width="201"
                                height="50"
                                style={{ width: '201px', height: '50px' }}
                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="15" style={{ height: '15px' }}>
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
                              fontSize: '11px',
                              fontWeight: 'normal',
                              lineHeight: '15px',
                              width: '281px',
                              height: '17px',
                              textAlign: 'center',
                            }}
                          >
                            This link will expire after 30 minutes or after you change your password. Your existing password will still work until you
                            reset it. If you didn’t request that your password be reset (or remember your old password), then simply ignore this
                            email.
                          </td>

                          <td width="30" height="30" style={{ width: '30px', height: '30px' }}></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="40" style={{ height: '40px' }}>
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
    return `<tr>
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
                <td height="40" style="height: 40px">&nbsp;</td>
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
                        style="color: #666666; font-size: 12; font-weight: normal; line-height: 18px; width: 281px; height: 17px; text-align: center"
                      >
                        {{notificationData.customer.firstName}}, you requested a change…
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
                      <td width="30" height="32" style="width: 30px; height: 32px"></td>
                      <td
                        width="281"
                        height="75"
                        style="color: #000000; font-size: 26px; font-weight: 700; line-height: 32px; width: 281px; height: 32px; text-align: center"
                      >
                        Reset your password.
                      </td>

                      <td width="30" height="32" style="width: 30px; height: 32px"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="25" style="height: 25px">&nbsp;</td>
              </tr>
              <tr>
                <!-- Address Changed Unsuccessful-->
                <td width="341" style="width: 341px">
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 341px; text-align: center"
                    width="341"
                  >
                    <tr>
                      <!--<td width="30" height="32" style="width: 30px; height: 32px"></td>-->
                      <td>
                      <a
                                href="{{notificationData.customer.resetEmailUrl.value}}"
                                target="_blank"
                              >
                      <img
                                  src="https://s7d2.scene7.com/is/image/aeo/ResetYourPassword_button?scl=1&qlt=100"
                                  alt="chat"
                                  width="201"
                                  height="50"
                                  style="width: 201px; height: 50px"
                                />
                                </a>
                                </td>

                      <!--<td width="30" height="32" style="width: 30px; height: 32px"></td>-->
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- END Address Changed Unsuccessful-->
              <tr>
                <td height="15" style="height: 15px">&nbsp;</td>
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
                        style="color: #666666; font-size: 11px; font-weight: normal; line-height: 15px; width: 281px; height: 17px; text-align: center"
                      >
                        This link will expire after 30 minutes or after you change your password. Your existing password will still work until you reset it. If you didn’t request that your password be reset (or remember your old password), then simply ignore this email.
                      </td>

                      <td width="30" height="30" style="width: 30px; height: 30px"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="40" style="height: 40px">&nbsp;</td>
              </tr>
            </table>
          </td>
          <td width="17" style="width: 17px">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>`;
  }
}

export default StatusBox;
