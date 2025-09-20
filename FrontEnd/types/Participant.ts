export interface Participant {
  id: number
  name: string
  email: string
  phone: string
  age: number
  gender: string
  location: string
  registrationDate: string
  type: "New" | "Returning"
  avatar?: string
  preferences: string[]
  emergencyContact: string
}
