// src/types.ts
export interface Book {
    id?: number;
    title: string;
    author: string;
    pages: number;
    publisherId?: number;
  }
  
  export interface Publisher {
    id?: number;
    name: string;
    location: string;
  }
  