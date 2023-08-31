export interface Flex {
  flexCenter: string
  flexBetweenCenter: string
  flexColumnCenter: string
}

export const flex: Flex = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetweenCenter: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}
