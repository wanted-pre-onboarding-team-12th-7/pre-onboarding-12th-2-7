import 'styled-components'
import { FlexType } from '../constants/flex'
import { ColorType } from '../constants/colors'
import { fontSizeType } from './../constants/fontSize'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    colors: ColorType
    flex: FlexType
    fontSizes: fontSizeType
  }
}
