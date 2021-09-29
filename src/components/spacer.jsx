import React from 'react';

export default function Spacer(emailPreview, size) {
  if (emailPreview) {
    return (
      <tr>
        <td height={size} style={{ height: size + 'px', lineHeight: size + 'px' }}>
          &nbsp;
        </td>
      </tr>
    );
  } else {
    return `<tr>
<td height=${size} style="height: ${size + 'px'} , lineHeight: ${size + 'px'} ">
  &nbsp;
</td>
</tr>`;
  }
}
