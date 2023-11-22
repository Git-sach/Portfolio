export interface Comment {
  id: number,
  first_name: string | undefined,
  last_name: string | undefined,
  company_name: string | undefined,
  content: string,
  note: number,
  createdAt: Date | undefined,
  updatedAt: Date | undefined,
}
