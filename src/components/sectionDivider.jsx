import React from 'react';
import ConvertStyle from '../helpers/convertStyle';

function SectionDivider(emailPreview) {
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
            <tr tr>
              <td width="375" style={{ width: '375px' }}>
                <table
                  bgcolor="#333333"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style={{ borderCollapse: 'collapse', borderSpacing: '0', tableLayout: 'fixed', margin: '0 auto !important', width: '375px' }}
                  width="375"
                >
                  <tr>
                    <td
                      bgcolor="#333333"
                      align="center"
                      width="375"
                      height="42"
                      style={{
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '700',
                        backgroundColor: '#333333',
                        textAlign: 'center',
                        width: '375px',
                        height: '42px',
                        border: '0',
                      }}
                    >
                      2 Items Delayed
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="center"
                      width="375"
                      height="13"
                      style={{ textAlign: 'center', width: '375px', height: '13px', lineHeight: '13px' }}
                    >
                      <img
                        src="https://s7d2.scene7.com/is/image/aeo/arrow_down?scl=1&qlt=100"
                        alt="Turn your images on. Shop AEO"
                        width="32"
                        height="13"
                        border="0"
                        style={{ display: 'block', margin: '0 auto', border: '0', width: '32px', height: '13px' }}
                      />
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
    return `<!-- Section Divider -->
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
            <!-- <td width="17" style="width: 17px">&nbsp;</td> -->
            <td width="375" style="width: 375px">
              <table
                bgcolor="#333333"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; margin: 0 auto !important; width: 375px"
                width="375"
              >
                <tr>
                  <td
                    bgcolor="#333333"
                    align="center"
                    width="375"
                    height="42"
                    style="
                      color: #ffffff;
                      font-size: 14px;
                      font-weight: 700;
                      background-color: #333333;
                      text-align: center;
                      width: 375px;
                      height: 42px;
                      border: 0;
                    "
                  >
                    {{notificationData.order.orderSummary.itemsDelayedCount}} {{#greaterThan notificationData.order.orderSummary.itemsDelayedCount 1}}Items
                          {{else}}
                          Item
                          {{/greaterThan}}
                          Delayed
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="center"
                    width="375"
                    height="13"
                    style="text-align: center; width: 375px; height: 13px; line-height: 13px"
                  >
                    <img
                      src="https://s7d2.scene7.com/is/image/aeo/arrow_down?scl=1&qlt=100"
                      alt="Turn your images on. Shop AEO"
                      width="32"
                      height="13"
                      border="0"
                      style="display: block; margin: 0 auto; border: 0; width: 32px; height: 13px"
                    />
                  </td>
                </tr>
              </table>
            </td>
            <!-- <td width="17" style="width: 17px">&nbsp;</td> -->
          </tr>
        </table>
      </td>
    </tr>
    <!-- END Section Divider -->`;
  }
}

export default SectionDivider;
