// src/api/PublisherAPI.ts
import { Publisher } from '../types';

const BASE_URL = 'http://localhost:8080';

export async function getPublishers(): Promise<Publisher[]> {
  const res = await fetch(`${BASE_URL}/publishers`);
  if (!res.ok) throw new Error('Failed to fetch publishers');
  return res.json();
}

export async function addPublisher(publisher: Omit<Publisher, 'id'>): Promise<Publisher> {
  const params = new URLSearchParams();
  params.append('name', publisher.name);
  params.append('location', publisher.location);

  const res = await fetch(`${BASE_URL}/publishers?${params.toString()}`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error('Failed to add publisher');
  return res.json();
}

export async function getPublisher(id: number): Promise<Publisher> {
  const res = await fetch(`${BASE_URL}/publishers/${id}`);
  if (!res.ok) throw new Error('Failed to fetch publisher');
  return res.json();
}

export async function updatePublisher(id: number, publisher: Partial<Publisher>): Promise<Publisher> {
  const params = new URLSearchParams();
  if (publisher.name) params.append('name', publisher.name);
  if (publisher.location) params.append('location', publisher.location);

  const res = await fetch(`${BASE_URL}/publishers/${id}?${params.toString()}`, {
    method: 'PUT'
  });
  if (!res.ok) throw new Error('Failed to update publisher');
  return res.json();
}

export async function deletePublisher(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/publishers/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete publisher');
}
