const request = require('supertest');
const express = require('express');
const app = require('./server');

describe('Tasks API', () => {
  it('GET /tasks should return array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /tasks should add task', async () => {
    const newTtask = { title: 'Test task' };
    const res = await request(app).post('/tasks').send(newTtask);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test task');
  })
})