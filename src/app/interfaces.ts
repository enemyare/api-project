export interface User {
  email: string,
  password: string
}

export interface userList{
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: [
    {
      id: number,
      email: string,
      first_name: string,
      last_name: string,
      avatar: string
    }
  ]
}

export interface userCard{
      id: number,
      email: string,
      first_name: string,
      last_name: string,
      avatar: string
}

export interface filterData{
  even: boolean,
  odd: boolean,
  userId: number,
  userEmail: string
}

export interface patchUser{
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
