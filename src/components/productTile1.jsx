import React from 'react';

function ProductTile1(emailPreview) {
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
              <td width="375" height="30" style={{ width: '375px', height: '30px' }}>
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
                    <td width="29" style={{ width: '29px' }}>
                      &nbsp;
                    </td>
                    <td valign="top" width="115" style={{ width: '115px' }}>
                      <a href="{{{this.productUrl}}}" target="_blank">
                        <img
                          src="https://s7d2.scene7.com/is/image/aeo/2696_3130_073_f"
                          alt="Turn your images on. Shop AEO"
                          width="124"
                          height="160"
                          style={{ display: 'block', width: '124px', height: '159px' }}
                        />
                      </a>
                    </td>
                    <td width="20" style={{ width: '20px' }}>
                      &nbsp;
                    </td>
                    <td valign="top" width="160" style={{ width: '160px' }}>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{
                          textAlign: 'left',
                          borderCollapse: 'collapse',
                          borderSpacing: '0',
                          tableLayout: 'fixed',
                          margin: '0 auto !important',
                          width: '160px',
                        }}
                        width="160"
                      >
                        <tr>
                          <td
                            class="prodNameLink"
                            width="168"
                            color="#000000"
                            style={{ color: '#000000', fontSize: '11px', fontWeight: '700', lineHeight: '15px', width: '168px' }}
                          >
                            <a href="{{{this.productUrl}}}" target="_blank">
                              OFFLINE The Hugger Longline Racerback Sports Bra
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="168" height="12" style={{ fontSize: '12px', width: '168px', height: '12px', lineHeight: '12px' }}>
                            &nbsp;
                          </td>
                        </tr>

                        <tr>
                          <td width="168" style={{ width: '168px' }}>
                            <span style={{ color: '#000000', fontSize: '14px', lineHeight: '17px', fontWeight: '700' }}>$10.69 CAD</span>
                          </td>
                        </tr>

                        <tr>
                          <td width="168" height="12" style={{ fontSize: '12px', width: '168px', height: '12px', lineHeight: '12px' }}>
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td width="168" style={{ color: '#666666', fontSize: '11px', lineHeight: '16px', width: '169px' }}>
                            Style: 2696-3130
                          </td>
                        </tr>
                        <tr>
                          <td width="168" style={{ color: '#666666', fontSize: '11px', lineHeight: '16px', width: '169px' }}>
                            Color: True Black
                          </td>
                        </tr>
                        <tr>
                          <td width="168" style={{ color: '#666666', fontSize: '11px', lineHeight: '16px', width: '169px' }}>
                            Size: L
                          </td>
                        </tr>
                        <tr>
                          <td width="168" style={{ color: '#666666', fontSize: '11px', lineHeight: '16px', width: '169px' }}>
                            Item Price: $10.69 CAD
                          </td>
                        </tr>
                        <tr>
                          <td width="168" style={{ color: '#666666', fontSize: '11px', lineHeight: '16px', width: '169px' }}>
                            Qty: 1
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="29" style={{ width: '29px' }}>
                      &nbsp;
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
                  style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '375px' }}
                  width="375"
                >
                  <tr>
                    <td width="17" height="30" style={{ width: '17px', height: '30px' }}>
                      &nbsp;
                    </td>
                    <td width="341" height="30" style={{ borderBottom: '1px solid #cccccc', width: '341px', height: '30px' }}>
                      &nbsp;
                    </td>
                    <td width="17" height="30" style={{ width: '17px', height: '30px' }}>
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    );
  } else {
    return `<tr>
    <!-- Product Emailed Tile -->

    <!-- Product Tile -->
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
          <td width="375" height="30" style="width: 375px; height: 30px">&nbsp;</td>
        </tr>
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
                <td width="29" style="width: 29px">&nbsp;</td>
                <td valign="top" width="115" style="width: 115px">
                  <!-- Product Tile Left Image-->
                  <a href="{{{this.productUrl}}}" target="_blank">
                    <img
                      src="{{{this.productImageUrl}}}"
                      alt="Turn your images on. Shop AEO"
                      width="124"
                      height="160"
                      style="display: block; width: 124px; height: 159px"
                    />
                  </a>
                </td>
                <td width="20" style="width: 20px">&nbsp;</td>
                <td valign="top" width="160" style="width: 160px">
                  <!-- Product Tile Right Description -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      text-align: left;
                      border-collapse: collapse;
                      border-spacing: 0;
                      table-layout: fixed;
                      margin: 0 auto !important;
                      width: 160px;
                    "
                    width="160"
                  >
                    <tr>
                      <td
                        class="prodNameLink"
                        width="168"
                        color="#000000"
                        style="color: #000000; font-size: 11px; font-weight: 700; line-height: 15px; width: 168px"
                      >
                        <a href="{{{this.productUrl}}}" target="_blank">{{this.productName}}</a>
                      </td>
                    </tr>
                    <tr>
                      <td width="168" height="12" style="font-size: 12px; width: 168px; height: 12px; line-height: 12px">&nbsp;</td>
                    </tr>

                    <!-- Checks what type of product, if gift card or donation, 
                    don't show style, discounted price, etc. -->
                    {{#if this.color}}
                    <tr>
                      <td width="168" style="width: 168px">
                        {{#equals this.totalDiscountPrice "0.00"}}
                        <span style="color: #000000; font-size: 14px; line-height: 17px; font-weight: 700"
                          >$ {{this.totalListPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >

                        {{else}} {{#equals this.totalDiscountPrice "0,00"}}
                        <span style="color: #000000; font-size: 14px; line-height: 17px; font-weight: 700"
                          >$ {{this.totalListPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >

                        {{else}} {{#if this.totalDiscountPrice}}
                        <span style="color: #ed1c24; font-size: 14px; font-weight: 700; line-height: 17px"
                          >$ {{this.totalDiscountPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >&nbsp;&nbsp;
                        <span style="color: #666666; font-size: 14px; line-height: 17px; text-decoration: line-through"
                          >$ {{this.totalListPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >
                        {{else}}
                        <span style="color: #000000; font-size: 14px; line-height: 17px; font-weight: 700"
                          >$ {{this.totalListPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >
                        {{/if}} {{/equals}} {{/equals}}
                      </td>
                    </tr>

                    <tr>
                      <td width="168" height="12" style="font-size: 12px; width: 168px; height: 12px; line-height: 12px">&nbsp;</td>
                    </tr>
                    <tr>
                      <td width="168" style="color: #666666; font-size: 11px; line-height: 16px; width: 169px">Style: {{this.style}}</td>
                    </tr>
                    <tr>
                      <td width="168" style="color: #666666; font-size: 11px; line-height: 16px; width: 169px">Color: {{this.color}}</td>
                    </tr>
                    <tr>
                      <td width="168" style="color: #666666; font-size: 11px; line-height: 16px; width: 169px">Size: {{this.size}}</td>
                    </tr>
                    <tr>
                      <td width="168" style="color: #666666; font-size: 11px; line-height: 16px; width: 169px">
                        Item Price: $ {{this.listPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}
                      </td>
                    </tr>
                    <tr>
                      <td width="168" style="color: #666666; font-size: 11px; line-height: 16px; width: 169px">Qty: {{this.quantity}}</td>
                    </tr>
                    
                    

                    {{#if this.relatedLineItemNo}}
                    <tr>
                      <td height="26" style="height: 24px"></td>
                    </tr>
                    {{/if}} {{else}}
                    <tr>
                      <td width="168" style="width: 168px">
                        <span style="color: #000000; font-size: 13px; line-height: 17px; font-weight: 700"
                          >$ {{this.totalListPrice}} {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}</span
                        >
                      </td>
                    </tr>
                    {{/if}}
                    
                    
                  </table>
                </td>
                <!-- End Product Tile Right Description-->
                <td width="29" style="width: 29px">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        {{#if this.relatedLineItemNo}}
        <!-- Customization-->
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
                <td width="37" style="width: 37px">&nbsp;</td>
                <td width="301" style="width: 301px">
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 301px"
                    width="301"
                  >
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            border: 1px solid #d6d6d6;
                            border-radius: 10px;
                            border-collapse: separate;
                            border-spacing: 0;
                            table-layout: fixed;
                            margin: 0 auto !important;
                            width: 304px;
                            height: 72px;
                          "
                          width="301"
                        >
                          <tr>
                            <td width="13" height="75" style="width: 13px; height: 75px">&nbsp;</td>
                            <td width="73" height="75" style="width: 73px; height: 75px">
                              <a href="{{{this.productUrl}}}" target="_blank">
                                <img
                                  src="https://s7d2.scene7.com/is/image/aeo/{{this.relatedLineItem.productId}}_f?scl=1&qlt=100"
                                  alt="Active tes images. Magasiner chez AEO"
                                  alt="Turn your images on. Shop AEO"
                                  width="62"
                                  height="43"
                                />
                              </a>
                            </td>
                            <td width="215" height="75" style="width: 215px; height: 75px">
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0; width: 215px"
                                width="215"
                              >
                                <tr>
                                  <td style="font-size: 11px; font-weight: bold; line-height: 18px">
                                    <a href="{{{this.productUrl}}}" style="text-decoration: none; color: #000000" target="_blank">
                                      Custom Back Patch: $ {{this.relatedLineItem.totalListPrice}}
                                      {{#notEquals notifications.notificationData.[0].order.orderSummary.currency "USD"}}{{notifications.notificationData.[0].order.orderSummary.currency}}{{/notEquals}}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="color: #888888; font-size: 11px; line-height: 18px">
                                    <a href="{{{this.productUrl}}}" style="text-decoration: none; color: #888888" target="_blank"
                                      >{{{this.relatedLineItem.productName}}}</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" style="font-size: 10px; height: 10px; line-height: 10px">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-size: 11px; line-height: 14px">
                        Allow two extra delivery days for customized items. <br />
                        Customized items cannot be returned or exchanged.
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="37" style="width: 37px">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- End Customization-->
        {{/if}}
        <tr>
          <td>
            <!-- Product Tile bottom - gray divider-->
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px"
              width="375"
            >
              <tr>
                <td width="17" height="30" style="width: 17px; height: 30px">&nbsp;</td>
                <td width="341" height="30" style="border-bottom: 1px solid #cccccc; width: 341px; height: 30px">&nbsp;</td>
                <td width="17" height="30" style="width: 17px; height: 30px">&nbsp;</td>
              </tr>
              
            </table>
          </td>
          <!-- End gray divider-->
        </tr>
      </table>
    </td>
    <!-- End gray divider-->
  </tr>`;
  }
}

export default ProductTile1;
