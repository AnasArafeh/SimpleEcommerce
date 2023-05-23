export interface IAppButton {
    onClick: () => void,
    label: string,
    variant: "text" | "outlined" | "contained" | undefined,
    disabled?: boolean
}