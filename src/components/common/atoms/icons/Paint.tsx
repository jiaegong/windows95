import { IconProps } from '@/types/common';
import React from 'react';

function Paint({ size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='32' height='32' fill='url(#paint)' />
      <defs>
        <pattern
          id='paint'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_2_778' transform='scale(0.03125)' />
        </pattern>
        <image
          id='image0_2_778'
          width='32'
          height='32'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAAgAAAAACAgICAgAD////AwMAA/wD//wCAAAD/AAAA//8AAP+AAID/AP8AAIAtlzWCAAAAAXRSTlMAQObYZgAAATlJREFUKM9VkbFOwzAQQI/EEmtTVGC0nCgSIAYa0RkFu4I1UoLnNspuluxRE8GKxMIXAN/A1ImhUz+kA1/A+WyBelJ8uqd3d4oNgDHCjwMdlGAMEArMjIcORBzCAvOczxw4GYOqObAmbjwwXEoO80VceXA0VSsEIl34GccWsELMhANXDYLktQsLQTWwLFWrs/fkuvP1bYXG28fFt2sAtcSW58+Xr/WNE6rL3VahsPkpHCgQ3KOwEQ4sLbDCOi1oSKoQkFDmBIK63Z1boZQOsNRMShuyzqduqJEUQ53TfbAH05R93z81/0A0WusBDbA9B+2kF+hYw4NTrdHZM3p09g3r/BnGGujEWZbRlkhTDJ0QdGOsJMFtIXDnjcGBwzZR3pCc6vYxIWeQNMFErQkS+jn/BhCNIBDCb4Bf8xd14avAodYAAAAASUVORK5CYII='
        />
      </defs>
    </svg>
  );
}

export default Paint;
