export interface IAppCard {
    children: React.ReactNode,
    title: string,
    actions?: () => JSX.Element
}