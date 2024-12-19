// src/api/PublisherAPI.ts
import axios from 'axios';
import { Publisher } from '../types';

const BASE_URL = 'http://localhost:8080';

export async function getPublishers(): Promise<Publisher[]> {
  const res = await axios.get(`${BASE_URL}/publishers`);
  return res.data;
}

export async function addPublisher(publisher: Omit<Publisher, 'id'>): Promise<Publisher> {
  const params = new URLSearchParams();
  params.append('name', publisher.name);
  params.append('location', publisher.location);

  const res = await axios.post(`${BASE_URL}/publishers?${params.toString()}`);
  return res.data;
}

export async function getPublisher(id: number): Promise<Publisher> {
  const res = await axios.get(`${BASE_URL}/publishers/${id}`);
  return res.data;
}

export async function updatePublisher(id: number, publisher: Partial<Publisher>): Promise<Publisher> {
  const params = new URLSearchParams();
  if (publisher.name) params.append('name', publisher.name);
  if (publisher.location) params.append('location', publisher.location);

  const res = await axios.put(`${BASE_URL}/publishers/${id}?${params.toString()}`);
  return res.data;
}

export async function deletePublisher(id: number): Promise<void> {
  await axios.delete(`${BASE_URL}/publishers/${id}`);
}
