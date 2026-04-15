interface User {
    id: number
    name: string
    username: string
    phone: string
    address: {
        street: string
        suite: string
        city: string
    }
}