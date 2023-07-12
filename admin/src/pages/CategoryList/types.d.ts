export interface ListItem {
  _id: string
  parent?: {
    name: string
  }
  name: string
}