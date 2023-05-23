export interface ITableOperations {
    searchComponent?: () => JSX.Element,
    filterComponent?: () => JSX.Element,
    paginationComponent?: () => JSX.Element,
    children: any
}