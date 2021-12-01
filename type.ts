import { IconType } from "react-icons";

export interface IServices {
  title: string
  about: string
  Icon: IconType
}

export interface ISkill {
  name: string
  level: string
  Icon: IconType
}

export type Category = 'react' | 'mongo' | 'vuejs' | 'nextjs' | 'nextjs' | 'express' | 'django' | 'node'

export interface IProject {
  id: number,
  name: string,
  description: string,
  image_path: string,
  deployed_url: string,
  github_url: string,
  category: Category[],
  key_techs: string[]
}
