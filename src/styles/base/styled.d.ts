import 'styled-components'
import { FontSizeType } from './../constants/fontSize'
import { ColorType } from '../constants/colors'
import { FlexType } from '../constants/flex'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    colors: ColorType
    flex: FlexType
    fontSizes: FontSizeType
  }
}
