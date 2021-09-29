import React from 'react';

function NeedHelp(emailPreview) {
  if (emailPreview)
    return (
      <tr>
        <td>
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
              width: '375px',
            }}
            width="375"
          >
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
                    border: '1px solid #cccccc',
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
                    <td
                      bgcolor="#f6f6f6"
                      align="center"
                      height="50"
                      style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        backgroundColor: '#f6f6f6',
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '700',
                        height: '50px',
                        textAlign: 'center',
                      }}
                    >
                      Need help? Let's chat.
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
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '341px' }}
                        width="341"
                      >
                        <tr>
                          <td width="114" height="25" style={{ width: '114px', minWidth: '114px', height: '25px', textAlign: 'center' }}>
                            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/content/help/chat-us" target="_blank">
                              <img
                                src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_chatbubble?scl=1&qlt=100"
                                alt="chat"
                                width="21"
                                height="19"
                                style={{ width: '21px', height: '19px' }}
                              />
                            </a>
                          </td>
                          <td width="113" height="25" style={{ width: '113px', minWidth: '113px', height: '25px', textAlign: 'center' }}>
                            <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/content/help/call-us" target="_blank">
                              <img
                                src="https://s7d2.scene7.com/is/image/aeo/call-us-smartphone?disabledFeatures=1620064979557?scl=1&qlt=100"
                                alt="call"
                                width="14"
                                height="25"
                                style={{ width: '14px', height: '25px' }}
                              />
                            </a>
                          </td>
                          <td width="114" height="25" style={{ width: '114px', minWidth: '114px', height: '25px', textAlign: 'center' }}>
                            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/contact" target="_blank">
                              <img
                                src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_mail?scl=1&qlt=100"
                                alt="email"
                                width="24"
                                height="17"
                                style={{ width: '24px', height: '17px' }}
                              />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="114" height="12" style={{ width: '114px', minWidth: '114px', height: '12px', lineHeight: '12px' }}>
                            &nbsp;
                          </td>
                          <td width="113" height="12" style={{ width: '114px', minWidth: '114px', height: '12px', lineHeight: '12px' }}>
                            &nbsp;
                          </td>
                          <td width="114" height="12" style={{ width: '114px', minWidth: '114px', height: '12px', lineHeight: '12px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="helpLink"
                            width="114"
                            style={{ color: '#000000', fontSize: '12px', fontWeight: '700', width: '114px', minWidth: '114px', textAlign: 'center' }}
                          >
                            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/content/help/chat-us" target="_blank">
                              Live Chat
                            </a>
                          </td>
                          <td
                            class="helpLink"
                            width="113"
                            style={{ color: '#000000', fontSize: '12px', fontWeight: '700', width: '113px', minWidth: '113px', textAlign: 'center' }}
                          >
                            <a
                              href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/content/help/call-us?cid=AE_Email_190419_6&om_rid=Nxu6bC&om_mid=_BgPHTQB9zkmezi&om_cn=&om_lm="
                              target="_blank"
                            >
                              1 (855) 468-4333
                            </a>
                          </td>
                          <td
                            class="helpLink"
                            width="114"
                            style={{ color: '#000000', fontSize: '12px', fontWeight: '700', width: '113px', minWidth: '113px', textAlign: 'center' }}
                          >
                            <a href="https://www.ae.com/{{notifications.notificationData.[0].customer.site}}/en/contact" target="_blank">
                              Email Us
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="45" style={{ height: '45px' }}>
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
  else {
    return `<!-- Need Help? Let's Chat -->
    <tr>
      <td>
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
            width: 375px;
          "
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
                  border: 1px solid #cccccc;
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
                  <!-- Need help? Let's Chat Label-->
                  <td
                    bgcolor="#f6f6f6"
                    align="center"
                    height="50"
                    style="
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                      background-color: #f6f6f6;
                      color: #000000;
                      font-size: 16px;
                      font-weight: 700;
                      height: 50px;
                      text-align: center;
                    "
                  >
                    Need help? Let's chat.
                  </td>
                </tr>
                <tr>
                  <td height="30" style="height: 30px">&nbsp;</td>
                </tr>
                <tr>
                  <!-- Contact Methods -->
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse: collapse;
                        border-spacing: 0;
                        table-layout: fixed;
                        margin: 0 auto !important;
                        width: 341px;
                      "
                      width="341"
                    >
                      <tr>
                        <td width="114" height="25" style="width: 114px; min-width: 114px; height: 25px; text-align: center">
                          <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/content/help/chat-us" target="_blank">
                            <img
                              src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_chatbubble?scl=1&qlt=100"
                              alt="chat"
                              width="21"
                              height="19"
                              style="width: 21px; height: 19px"
                            />
                          </a>
                        </td>
                        <td width="113" height="25" style="width: 113px; min-width: 113px; height: 25px; text-align: center">
                          <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/content/help/call-us" target="_blank">
                            <img
                              src="https://s7d2.scene7.com/is/image/aeo/call-us-smartphone?disabledFeatures=1620064979557?scl=1&qlt=100"
                              alt="call"
                              width="14"
                              height="25"
                              style="width: 14px; height: 25px"
                            />
                          </a>
                        </td>
                        <td width="114" height="25" style="width: 114px; min-width: 114px; height: 25px; text-align: center">
                          <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/contact" target="_blank">
                            <img
                              src="https://s7d2.scene7.com/is/image/aeo/BOPIS19_mail?scl=1&qlt=100"
                              alt="email"
                              width="24"
                              height="17"
                              style="width: 24px; height: 17px"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="114" height="12" style="width: 114px; min-width: 114px; height: 12px; line-height: 12px">
                          &nbsp;
                        </td>
                        <td width="113" height="12" style="width: 113px; min-width: 113px; height: 12px; line-height: 12px">
                          &nbsp;
                        </td>
                        <td width="114" height="12" style="width: 114px; min-width: 114px; height: 12px; line-height: 12px">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="helpLink"
                          width="114"
                          style="
                            color: #000000;
                            font-size: 12px;
                            font-weight: 700;
                            width: 114px;
                            min-width: 114px;
                            text-align: center;
                          "
                        >
                          <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/content/help/chat-us" target="_blank"
                            >Live Chat</a
                          >
                        </td>
                        <td
                          class="helpLink"
                          width="113"
                          style="
                            color: #000000;
                            font-size: 12px;
                            font-weight: 700;
                            width: 113px;
                            min-width: 113px;
                            text-align: center;
                          "
                        >
                          <a
                            href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/content/help/call-us?cid=AE_Email_190419_6&om_rid=Nxu6bC&om_mid=_BgPHTQB9zkmezi&om_cn=&om_lm="
                            target="_blank"
                          >
                            {{#equals notificationData.customer.preferredCountry "US"}} 1 (888) 232-4535 {{/equals}} {{#equals
                            notificationData.customer.preferredCountry "CA"}} 1 (855) 468-4333 {{/equals}} {{#equals notificationData.customer.preferredCountry "MX"}} 1
                            (800) 062-5175 {{/equals}} {{#equals notificationData.customer.preferredCountry "INTL"}} 1 (888) 232-4535 {{/equals}}
                          </a>
                        </td>
                        <td
                          class="helpLink"
                          width="114"
                          style="
                            color: #000000;
                            font-size: 12px;
                            font-weight: 700;
                            width: 114px;
                            min-width: 114px;
                            text-align: center;
                          "
                        >
                          <a href="https://www.ae.com/{{notificationData.customer.preferredCountry}}/en/contact" target="_blank">Email Us</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="45" style="height: 45px">&nbsp;</td>
                </tr>
              </table>
            </td>
            <td width="17" style="width: 17px">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- END Need Help? Let's Chat -->`;
  }
}
export default NeedHelp;
