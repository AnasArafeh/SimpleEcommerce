export interface IAppPaper {
    title: string,
    subTitle: string,
    buttonComponent?: () => JSX.Element,
    children: any
}