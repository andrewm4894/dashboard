import styled from "styled-components"
import { getSizeBy, getColor, Icon, Text, breakpoints } from "@netdata/netdata-ui"

export const Container = styled.div`
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: ${getSizeBy(3)};

  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.laptop} {
    display: flex;
  }
`

export const VersionIndicator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const NewVersionIndicator = styled(VersionIndicator)`
  margin-left: ${getSizeBy(2)};
  color: ${getColor(["success"])};
`

export const StyledIcon = styled(Icon)`
  fill: ${getColor(["success"])};
  margin-right: ${getSizeBy()};
`

export const TextBold = styled(Text)`
  font-weight: bold;
  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.laptopLarge} {
    display: block;
  }
`

export const VersionNumber = styled(Text)`
  margin-left: 4px;
  color: ${getColor(["white", "pure"])};
`

export const CollapsableText = styled(Text)`
  @media ${breakpoints.mobileSmall} {
    display: none;
  }

  @media ${breakpoints.desktop} {
    display: block;
  }
`