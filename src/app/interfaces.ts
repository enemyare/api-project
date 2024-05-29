export interface User {
  email: string,
  password: string
}

export interface UserList{
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

export interface UserCard{
      id: number,
      email: string,
      first_name: string,
      last_name: string,
      avatar: string
}

export interface FilterData{
  even: boolean,
  odd: boolean,
  userId: number,
  userEmail: string
}

export interface PatchUser{
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}



export interface UserById{
  data: {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
  },
 support: {
   url: string,
   text:string
  }
}
